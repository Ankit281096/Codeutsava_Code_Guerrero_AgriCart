var Product_Craft = require('../models/product_craft');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/8KMpbTn/3.jpg',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/JKB5xq4/2.jpg',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/ZB6R9zZ/1.jpg',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/PrnF5X0/4.jpg',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/87CFL02/5.jpg',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/mTzFkp4/6.jpg',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
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

//https://ibb.co/WkWNCvT


