var Product = require('../models/product');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath:
      'https://images-na.ssl-images-amazon.com/images/I/91ZYSc4rrPL._SL1500_.jpg',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Product({
    imagePath:
      'https://bab-assets2.babapi.ooo/img/othe/5344535/8c/9b/oceanfreeabsoluterootmonsterp8fertilizer22piecesa941a.jpg.0615a58c9b.999x1000x900.jpg',
    title: 'Ocean Free Absolute Root Monster P8 Fertilizer (22 Pieces)',
    description:
      'Direct supply of nutrients to roots makes plant roots healthier so plants will grow stronger.Contains minerals and trace elements for added benefit.This product will only benefit the plant and will cause no algae problems in your tank',
    price: 600
  }),
  new Product({
    imagePath:
      'https://images-na.ssl-images-amazon.com/images/I/4191jHG0MhL.jpg',
    title:
      'Chelated Ferrous Micronutrient Fertilizer for all Plants and Garden. Water soluble and spray. 500 gm- Nutrimax ',
    description: 'Suitable for Copper deficiate soil ',
    price: 399
  }),
  new Product({
    imagePath:
      'https://images-na.ssl-images-amazon.com/images/I/41T7QXvdHlL.jpg',
    title:
      'Humax 100% Organic Liquid Bio-Fertilizer For All Crops (Black,1Liter) ',
    description:
      'Humax Can be Foliar (on leaf Spray) & Soil applied,its a soil conditioners,High in both humic & Fulvic acids,Auxins,minerals ,vitamins etc,aids photosynthesis ',
    price: 350
  }),
  new Product({
    imagePath:
      'https://sloanreview.mit.edu/content/uploads/2017/08/MAG-FR-Oestreicher-Singer-Product-Recommendation-Viral-Marketing-Social-Media-Network-Ecommerce-1200-1200x627.jpg',
    title: 'Bloom Buddy All Purpose Plant Feed 1Kg',
    description:
      'A unique combination of slow release organic plant inputs like potash ash from molasses and press mud manure and water soluble nutrients. Enhances plant growth and improves soil quality Improves flowering and maximises fruit formation ',
    price: 375
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
