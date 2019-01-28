var Course = require('../models/course');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Course({
    imagePath:
      'https://i.ibb.co/1ZXft4V/mehendi1.png',
    title:
      'HENNA MEHNDI FOR BEGINNERS - TYPES OF STRIPS | BEST ONLINE MEHENDI LEARNING TUTORIAL',
    description:
      'Online Mehndi Learning Videos, New Henna Mehndi Tutorials, Types of Strip Designs in Mehndi, Henna Mehndi for Beginners, How to make strip designs in Mehendi, Beautiful Mehndi Strip Designs, Learn Mehndi Online for Beginners, Types of Strips Henna Video, Learn Various Henna Strip Patterns, Learn Mehndi Strip designs, Best Mehendi Strips Designs, Beginner Mehandi',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/5sSMZPp/mehendi2.png',
    title:
      'How to learn Mehndi for Beginners ',
    description:
      'We are going to learn about some basic pattern of mehndi design. Initially, we use the pencil to make these pattern.',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/h7dRWLp/Data-entry.png',
    title:
      'Data Entry Tutorial In Hindi ',
    description:
      'A data entry similar to a typist, is a member of staff employed to enter and update data into a computer system database, often from paper documents using a keyboard, optical scanner, or data recorder.The keyboards used can often have specialist keys and multiple colors to help in the task and speed up the work. ',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/1ZpqPp6/java-in-hindi.png',
    title:
      'Introduction to Java in Hindi ',
    description:
      'Java is a programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS), including Windows, Linux and Mac OS. Java derives much of its syntax from the C and C++ programming languages.',
    price: 429
  }),
  new Course({
    imagePath:
      ' https://i.ibb.co/NNz8Qs1/deafness-sign-language.png',
    title:
      'Deafness and Disability - Sign Language Tutorial ',
    description:
      'Deaf Hearing (one finger, not two- whoops!) DeafenedHard of Hearing Hearing AidsLipread (Directional Sign)Sign Language Interpreter Lipspeaker Electronic Notetaker Palantypist Videophone Disabled Blind Usher Syndrome',
    price: 429
  }),
  new Course({
    imagePath:
      'https://i.ibb.co/M91k9nC/learn-sign-language.png',
    title:
      'Learn Indian Sign language "BASIC 25 WORDS"',
    description:
      'Mr. Arun C. Rao is once again here to teach you the the basic 25 Golden Words. This is an important skill that is completely ignored these days, try to learn few of them and try to communicate with people for whom sign is the only form of communication. We are sure you would feel happy & making them a part of the league gifted with voice.',
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


