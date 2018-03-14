import express from 'express';
import user from '../controllers/UserController';

const { addUser, signIn } = user;

const userRouter = express.Router();

userRouter.route('/signup')
  .post(addUser);

userRouter.route('/login')
  .post(signIn);

export default userRouter;
