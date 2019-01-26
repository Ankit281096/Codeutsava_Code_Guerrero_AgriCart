var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');
var Product_Craft =  require('../models/product_craft');
var Course = require('../models/course');
var Order = require('../models/order');
var flag=0;

router.get('/', function(req, res) {
  res.sendFile(__dirname + './public/index.html');
});

/* GET home page. */
router.get('/product', function(req, res, next) {
  flag=0;
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'CART',
      products: productChunks,
      successMsg,
      noMessages: !successMsg
    });
  });
});

router.get('/product_craft', function(req, res, next) {
  flag=1;
  var successMsg = req.flash('success')[0];
  Product_Craft.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'CART',
      products: productChunks,
      successMsg,
      noMessages: !successMsg
    });
  });
});

router.get('/course', function(req, res, next) {
  flag=2;
  var successMsg = req.flash('success')[0];
  Course.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'CART',
      products: productChunks,
      successMsg,
      noMessages: !successMsg
    });
  });
});


router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  if (flag==0){
    Product.findById(productId, function(err, product) {
      if (err) {
        return res.redirect('/product');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/product');
    });
  }

  else if(flag==1){
    Product_Craft.findById(productId, function(err, product) {
      if (err) {
        return res.redirect('/product_craft');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/product_craft');
    });
  }

  else{
    Course.findById(productId, function(err, product) {
      if (err) {
        return res.redirect('/product_craft');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/course');
    });
  }
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', { products: null });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkout', {
    total: cart.totalPrice,
    errMsg: errMsg,
    noError: !errMsg
  });
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var stripe = require('stripe')('sk_test_l8L0k5Zx2VUSXTVWvzMaTo20');
  stripe.charges.create(
    {
      amount: cart.totalPrice * 100,
      currency: 'inr',
      source: req.body.stripeToken, // obtained with Stripe.js
      description: 'Test Charge'
    },
    function(err, charge) {
      if (err) {
        req.flash('error', err.message);
        return res.redirect('/checkout');
      }
      var order = new Order({
        user: req.user,
        cart,
        address: req.body.address,
        name: req.body.name,
        paymentId: charge.id
      });
      order.save(function(err, result) {
        req.flash('success', 'Successfully bought product!');
        req.session.cart = null;
        res.redirect('/product');
      });
    }
  );
});
module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}
