import express from 'express';
import business from '../controllers/BusinessController';

const {
  registerBusiness, updateBusinessProfile, deleteBusiness, getBusiness
} = business;

const businessRouter = express.Router();

businessRouter.route('/businesses')
  .post(registerBusiness);

businessRouter.route('/businesses/:id')
  .put(updateBusinessProfile)
  .delete(deleteBusiness)
  .get(getBusiness);

export default businessRouter;
