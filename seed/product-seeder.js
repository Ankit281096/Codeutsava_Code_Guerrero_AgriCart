var Product = require('../models/product');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath:
      'https://www.1800wheelchair.com/media/catalog/product/cache/1/image/330x330/140720ac20424209c6bb28e1b7731856/e/v/everest-jennings-traveler-hd.jpg',
    title:
      'Advanced WheelChair',
    description:
      'Advanced Feature WheelChair is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 6999
  }),
  new Product({
    imagePath:
      'https://media.ottobock.com/prosthetics/arms/myo/myobock_system_1_1_hotspot_zoom.jpg',
    title:
      'Full Arm Prosthetic',
    description:
      'Full Arm Prosthetic is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 15999
  }),
  new Product({
    imagePath:
      'https://media.ottobock.com/_web-site/prosthetics/upper-limb/myofacil/images/_29996_d2_74649_169_4c_wb_16_9_slider.jpg',
    title:
      'Half Arm Prosthetic',
    description:
      'Half Arm Prosthetic is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 8999
  }),
  new Product({
    imagePath:
      'https://rukminim1.flixcart.com/image/612/612/jflfgcw0/diaper/n/j/h/medswach-l-20-health-track-original-imaf4yf9zrruvubh.jpeg?q=70',
    title:
      'Med-Swach Adult Diaper',
    description:
      'Med-Swach Adult Diaper  is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 499
  }),
  new Product({
    imagePath:
      'https://rukminim1.flixcart.com/image/612/612/jg6v24w0/diaper/a/c/x/plus-disposable-pull-up-l-10-eldeez-original-imaf4gj47xgbwceh.jpeg?q=70',
    title:
      'Eldeez Adult Diaper',
    description:
      'Eldeez Adult Diaper is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 349
  }),
  new Product({
    imagePath:
      'https://www.fodac.org/wp-content/gallery/durable-medical-equipment/dsc_5122j.jpg',
    title:
      'Supportive Crutch ',
    description:
      'Supportive Crutch is the by-product obtained in the process of cold pressing of Neem tree fruits and kernels. It doesnt create "death zones" as other insecticides can. Rich micronutrient content such as Nitrogen, Potassium, Sulphur, Magnesium, Phosphorus, Zinc, Calcium, Copper, Iron and Manganese can enhance the plant immunity and the growth of high yield crops.',
    price: 3999
  }),
  
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
