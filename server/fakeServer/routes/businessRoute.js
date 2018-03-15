import express from 'express';
import business from '../controllers/BusinessController';

const { registerBusiness, updateBusinessProfile, deleteBusiness } = business;

const businessRouter = express.Router();

businessRouter.route('/businesses')
  .post(registerBusiness);

businessRouter.route('/businesses/:id')
  .put(updateBusinessProfile)
  .delete(deleteBusiness);

export default businessRouter;
