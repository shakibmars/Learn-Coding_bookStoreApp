import express from 'express'

import { getBook } from '../controller/book.controller.js' //? getBook is a controller function, responsible for handling logic when a specific route is accessed. it Fetch book data from a database or service. Send a JSON response with book information.

let router = express.Router()

router.get('/', getBook) //? when we send a request to '/' route the getBook function will call. The Router() function is used to define route handlers separately. Instead of writing all routes in a single file (e.g., app.js or server.js), we break them into modular files using the router.

export default router