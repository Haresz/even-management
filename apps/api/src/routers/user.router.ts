import { Router } from 'express';
import userController, {
  verifyTokenController,
} from '../controllers/user.controller';
import { addDahsboard } from '../controllers/dhasboard.controller';

const userRouter = Router();

userRouter.get('/detail/:id', userController.detailUser);

userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);
userRouter.post(
  '/switch/:id',
  verifyTokenController,
  userController.findUniqeId,
  addDahsboard,
);

export default userRouter;
