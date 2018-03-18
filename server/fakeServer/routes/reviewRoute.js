import express from 'express';
import ReviewController from '../controllers/ReviewController';

const { postReview, getAllReviews } = ReviewController;

const reviewRouter = express.Router();

reviewRouter.route('/businesses/:businessId/reviews')
  .post(postReview)
  .get(getAllReviews);

export default reviewRouter;
