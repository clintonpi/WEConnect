import express from 'express';
import BusinessController from '../controllers/BusinessController';
import BusinessMiddleware from '../middlewares/BusinessMiddleware';

const {
  registerBusiness, updateBusinessProfile, deleteBusiness, getBusiness, getAllBusinesses
} = BusinessController;

const { getByLocAndCat, getByLocation, getByCategory } = BusinessMiddleware;

const businessRouter = express.Router();

businessRouter.route('/businesses')
  .post(registerBusiness)
  .get(getByLocAndCat, getByLocation, getByCategory, getAllBusinesses);

businessRouter.route('/businesses/:businessId')
  .put(updateBusinessProfile)
  .delete(deleteBusiness)
  .get(getBusiness);

export default businessRouter;
