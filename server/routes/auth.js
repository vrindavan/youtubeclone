import express from 'express';
import { signin, signup } from '../controllers/auth.js';

const router = express.Router();

// CREATE USER
router.post('/signup', signup);

// SIGN IN
router.post('/signin', signin);

// GOOGLE AUTHENTICATION
router.post('/google');

export default router;
