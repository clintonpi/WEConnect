import express from 'express';
import reviews from '../controllers/ReviewController';

const { postReview, getAllReviews } = reviews;

const reviewRouter = express.Router();

reviewRouter.route('/businesses/:businessId/reviews')
  .post(postReview)
  .get(getAllReviews);

export default reviewRouter;
