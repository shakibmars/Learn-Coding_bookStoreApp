import express from 'express';
let router = express.Router();
import { signup, login } from '../controller/user.controller.js'

router.post('/signup', signup);
router.post('/login', login);

export default router;