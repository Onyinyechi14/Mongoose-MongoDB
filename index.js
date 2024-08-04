require ('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to the database');
});

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});



//create and save record
const Person = require('./myDatabase/models/person.js'); // Assuming you have a Person model defined

async function savePerson(person) {
  try {
    const newPerson = new Person(person);

    const savedPerson = await newPerson.save();
    console.log('Person saved:', savedPerson);
  } catch (err) {
    console.error('Error saving person:', err);
  }
}

const arrayOfPeople = [
  { name: 'Esther', age: 28, favoriteFoods: ['Egg', 'Yam'] },
  { name: 'Bobbie', age: 35, favoriteFoods: ['Egusi soup', 'Eba'] }
];

arrayOfPeople.forEach(element => {
  savePerson(element);
});



async function findPerson(Person) {
  try {
    const findPerson = await Person.find();
    console.log('Found people:', people);

  } catch (err) {
    console.error('Error:', err);
  }
}

