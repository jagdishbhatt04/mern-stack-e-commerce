import express from 'express';
import { createUser, loginUser, getUsers, Profile } from '../Controller/userController.js';
import { authMiddleware } from '../Middleware/authMiddleware.js'

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser)
router.get('/allUsers', getUsers);
router.get('/Profile',authMiddleware, Profile)

export default router;