import fakeDb from '../dummyModels/index';

const { review } = fakeDb;

/**
 * @class ReviewController
 * @classdesc Implements user being able to post a review
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
    const businessId = req.params.id;
    const {
      userId, content
    } = req.body;
    const newReview = {
      id: review[review.length - 1].id + 1,
      businessId,
      userId,
      content
    };
    review.push(newReview);
    res.status(201).json({
      message: 'Review posted successfully!',
      data: review[review.length - 1]
    });
  }
}

export default ReviewController;
