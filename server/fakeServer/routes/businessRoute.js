import express from 'express';
import BusinessController from '../controllers/BusinessController';

const {
  registerBusiness, updateBusinessProfile, deleteBusiness, getBusiness, getAllBusinesses
} = BusinessController;

const businessRouter = express.Router();

businessRouter.route('/businesses')
  .post(registerBusiness)
  .get(getAllBusinesses);

businessRouter.route('/businesses/:businessId')
  .put(updateBusinessProfile)
  .delete(deleteBusiness)
  .get(getBusiness);

export default businessRouter;
