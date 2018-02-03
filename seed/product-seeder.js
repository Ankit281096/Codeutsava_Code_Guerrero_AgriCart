var Product = require('../models/product');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath:
      'http://static.wixstatic.com/media/04839a_b4d0c16c316d49b68c12dee6f0920ce4.jpg',
    title: 'Product1',
    description: 'Awesome Product1...!!',
    price: 100
  }),
  new Product({
    imagePath:
      'http://arenadm.com/wp-content/uploads/2013/03/product-opencart.jpg',
    title: 'Product2',
    description: 'Awesome Product2...!!',
    price: 110
  }),
  new Product({
    imagePath: 'http://www.nsrcel.org/wp-content/uploads/2018/01/product.png',
    title: 'Product3',
    description: 'Awesome Product3...!!',
    price: 120
  }),
  new Product({
    imagePath:
      'http://www.connectnigeria.com/articles/wp-content/uploads/2016/07/product-launch-2.jpg',
    title: 'Product4',
    description: 'Awesome Product4...!!',
    price: 130
  }),
  new Product({
    imagePath:
      'https://sloanreview.mit.edu/content/uploads/2017/08/MAG-FR-Oestreicher-Singer-Product-Recommendation-Viral-Marketing-Social-Media-Network-Ecommerce-1200-1200x627.jpg',
    title: 'Product5',
    description: 'Awesome Product5...!!',
    price: 140
  })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
