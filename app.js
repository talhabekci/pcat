const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const swal = require('sweetalert');
const ejs = require('ejs');
const path = require('path');
const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');
require('dotenv').config();

const app = express();

//connect db
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log('DB Connection Error: ' + err);
    });

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

//Routes
app.get('/', photoController.getAllPhotos);
app.get('/photo/:id', photoController.getPhoto);
app.post('/photos', photoController.addPhoto);
app.put('/photos/edit/:id', photoController.updatePhoto);
app.delete('/photos/delete/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});