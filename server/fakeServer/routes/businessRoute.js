import express from 'express';
import business from '../controllers/BusinessController';

const { registerBusiness, updateBusinessProfile } = business;

const businessRouter = express.Router();

businessRouter.route('/businesses')
  .post(registerBusiness);

businessRouter.route('/businesses/:id')
  .put(updateBusinessProfile);

export default businessRouter;
