import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

let user = mongoose.model('user', userSchema) //? we convert the schema into a model. we can use this model to create, read, update and delete data from the database.

export default user