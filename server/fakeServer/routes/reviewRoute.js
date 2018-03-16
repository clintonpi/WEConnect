import express from 'express';
import review from '../controllers/ReviewController';

const { postReview } = review;

const reviewRouter = express.Router();

reviewRouter.route('/businesses/:id/reviews')
  .post(postReview);

export default reviewRouter;
