var Product_Craft = require('../models/product_craft');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/8KMpbTn/3.jpg',
    title:
      'Earthern Face Vase',
    description:
      'Earthern Face Vase is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 500
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/JKB5xq4/2.jpg',
    title:
      'Decorative Earthern Pot (Blue)',
    description:
      'Decorative Earthern Pot  is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 250
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/ZB6R9zZ/1.jpg',
    title:
      'Bastar Art Painting (Madhubani)',
    description:
      'Bastar Art Painting is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 3500
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/PrnF5X0/4.jpg',
    title:
      'Scenic Monsoon Painting',
    description:
      'Scenic Monsoon Painting is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 3000
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/87CFL02/5.jpg',
    title:
      'Lord BUDDHA Abstract Blue Canvas Painting',
    description:
      'Lord BUDDHA Abstract Blue Canvas Painting is by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 4500
  }),
  new Product_Craft({
    imagePath:
      'https://i.ibb.co/mTzFkp4/6.jpg',
    title:
      'Combo Decorative Flower Vases',
    description:
      'Flower Decorative Vases is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
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


