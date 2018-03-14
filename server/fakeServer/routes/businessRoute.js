import express from 'express';
import business from '../controllers/BusinessController';

const { registerBusiness } = business;

const businessRouter = express.Router();

businessRouter.route('/businesses')
  .post(registerBusiness);

export default businessRouter;
