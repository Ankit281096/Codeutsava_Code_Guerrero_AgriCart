var Course = require('../models/course');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Course({
    imagePath:
      'https://i.ibb.co/1ZXft4V/mehendi1.png',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/5sSMZPp/mehendi2.png',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/h7dRWLp/Data-entry.png',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/NNz8Qs1/deafness-sign-language.png',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/1ZpqPp6/java-in-hindi.png',
    title:
      'SGK Products, Neem Oil Cake (Powder), 100% Organic Fertilizer, 2Kg Bag ',
    description:
      'Neem Oil Cake organic manure is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/M91k9nC/learn-sign-language.png',
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


