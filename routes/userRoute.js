import express from 'express';
import { handleUserSignup, getAllUsers, handleUserLogin } from '../controllers/userController.js';

const router = express.Router();


// signup user route
router.post('/', handleUserSignup);
router.get('/', getAllUsers);
router.post('/login', handleUserLogin)


export default router