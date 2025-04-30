import mongoose from 'mongoose';

let bookSchema = new mongoose.Schema({
    book_name: String,
    book_title: String,
    price: Number,
    category: String,
    image: String,
})

const Book = mongoose.model('book', bookSchema) //? here we created a Model with Schema. book is the name of the collection in MongoDB and bookSchema is the schema for that collection. mongodb add a 's' letter in the end of an collection.
export default Book