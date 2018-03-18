import express from 'express';
import UserController from '../controllers/UserController';

const { addUser, signIn } = UserController;

const userRouter = express.Router();

userRouter.route('/signup')
  .post(addUser);

userRouter.route('/login')
  .post(signIn);

export default userRouter;
