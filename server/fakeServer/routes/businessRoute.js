import express from 'express';
import businesses from '../controllers/BusinessController';

const {
  registerBusiness, updateBusinessProfile, deleteBusiness, getBusiness, getAllBusinesses
} = businesses;

const businessRouter = express.Router();

businessRouter.route('/businesses')
  .post(registerBusiness)
  .get(getAllBusinesses);

businessRouter.route('/businesses/:businessId')
  .put(updateBusinessProfile)
  .delete(deleteBusiness)
  .get(getBusiness);

export default businessRouter;
