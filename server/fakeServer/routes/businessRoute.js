import express from 'express';
import BusinessController from '../controllers/BusinessController';
import BusinessMiddleware from '../middlewares/BusinessMiddleware';

const {
  registerBusiness, updateBusinessProfile, deleteBusiness, getBusiness, getAllBusinesses
} = BusinessController;

const { getByLocation, getByCategory } = BusinessMiddleware;

const businessRouter = express.Router();

businessRouter.route('/businesses')
  .post(registerBusiness)
  .get(getByLocation, getByCategory, getAllBusinesses);

businessRouter.route('/businesses/:businessId')
  .put(updateBusinessProfile)
  .delete(deleteBusiness)
  .get(getBusiness);

export default businessRouter;
