import { Router } from 'express';
import userController from '../controllers/user.controller';
import { addDahsboard } from '../controllers/dhasboard.controller';

const userRouter = Router();

userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);
userRouter.post('/switch/:id', addDahsboard);

export default userRouter;
