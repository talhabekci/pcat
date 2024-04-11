const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect db
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create photo
// Photo.create({
//     title: 'Photo 1',
//     description: 'Photo description 1',
// });

//read a photo
// Photo.find().then((data) => {
//     console.log(data);
// });

//update a photo
// const id = '661849d0f310963ab746c4df';
// Photo.findByIdAndUpdate(
//     id, {
//     title: 'Photo title 11 updated',
//     description: 'Photo description 11 updated'
// },
//     { new: true }
// ).then((data) => {
//     console.log(data);
// }).catch((err) => {
//  console.log(err);
//});

//delete a photo
// const id = '661849d0f310963ab746c4df';

// Photo.findByIdAndDelete(id).then((data) => {
//     console.log("Photo removed!");
// }).catch((err) => {
//     console.log(err);
// });