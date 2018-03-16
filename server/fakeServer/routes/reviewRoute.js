import express from 'express';
import review from '../controllers/ReviewController';

const { postReview, getAllReviews } = review;

const reviewRouter = express.Router();

reviewRouter.route('/businesses/:id/reviews')
  .post(postReview)
  .get(getAllReviews);

export default reviewRouter;
