const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');

const app = express();

//connect db
mongoose.connect('mongodb://localhost/pcat-test-db');

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', async (req, res) => {
    const photos = await Photo.find();
    res.render('index', {
        photos
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/photos', (req, res) => {
    Photo.create({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
    }).then((data) => {
        console.log(data);
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});