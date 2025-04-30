import Book from '../model/book.model.js'

export async function getBook(req, res){
    try{
        let book = await Book.find();
        res.status(200).json(book) //? status 200 is used for success.
    }catch(error){
        console.log('my error:- ', error)
        alert('error:- ' + error.massage + ' </ from backend "book.controller.js" file getBook function />')
        res.status(500).json(error) //? status 500 is used for internet server error
    }
}

// export default getBook