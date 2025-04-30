//? CORS stands for Cross-Origin Resource Sharing. when our frontend and backend are run in different ports CORS errors is happened. because of security reason browser doesn't allow us to access backend data from a different port. because if it happened any body can access our data.
// ! we write our functions in 'controller' folder
// ! we define database schema in 'model' folder
// ! we create separate routes in 'route' folder
// ! make sure index.js file should be simple and clean. we should not write any logic in this file. we should import all the routes and use them here.

// const express = require('express');
// const dotenv = require('dotenv');
import express from 'express';
let app = express();
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

dotenv.config(); //? it is for load the variables from the .env file.
app.use(cors()) //? it is a middleware
app.use(express.json())

let port = process.env.PORT || 4001;
let URI = process.env.MongoDB_URI

//! connect to MongoDB
try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('MongoDB connected successfully')
}catch(error){
    console.log('error:- ', error);
}

// ! defining Routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})