import fakeDb from '../dummyModels/index';

const { reviews } = fakeDb;

/**
 * @class ReviewController
 * @classdesc Implements user being able to post a review and get all reviews
 */
class ReviewController {
  /**
   * Post A Review
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and review data
   * @memberof ReviewController
   */
  static postReview(req, res) {
    const businessId = parseInt(req.params.businessId, 10);
    const {
      userId, content
    } = req.body;
    const newReview = {
      id: reviews[reviews.length - 1].id + 1,
      businessId,
      userId,
      content
    };
    reviews.push(newReview);
    res.status(201).json({
      message: 'Review posted successfully!',
      data: reviews[reviews.length - 1]
    });
  }

  /**
   * Get All Reviews
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and all reviews for a business
   * @memberof ReviewController
   */
  static getAllReviews(req, res) {
    const businessId = parseInt(req.params.businessId, 10);
    const businessReview = [];
    reviews.forEach((review) => {
      if (review.businessId === businessId) {
        businessReview.push(review);
      }
    });
    res.status(200).json({
      message: 'Reviews gotten successfully!',
      data: businessReview
    });
  }
}

export default ReviewController;
