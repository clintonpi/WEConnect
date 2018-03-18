import express from 'express';
import users from '../controllers/UserController';

const { addUser, signIn } = users;

const userRouter = express.Router();

userRouter.route('/signup')
  .post(addUser);

userRouter.route('/login')
  .post(signIn);

export default userRouter;
