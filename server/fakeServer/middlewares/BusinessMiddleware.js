import fakeDb from '../dummyModels/index';

const { businesses } = fakeDb;

/**
 * @class BusinessMiddleware
 * @classdesc Implements user being able to get businesses by location and category
 */
class BusinessMiddleware {
  /**
   * Get Business(es) By Location
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - The next middleware
   * @return {object} Message and data of the business(es)
   * @memberof BusinessController
   */
  static getByLocation(req, res, next) {
    const { location } = req.query;
    if (!location) {
      return next();
    }
    const filteredBusinesses
        = businesses.filter(business => business.location.toLowerCase() === location.toLowerCase());

    res.status(200).send({
      message: `Gotten business(es) located at ${location}`,
      data: filteredBusinesses
    });
  }

  /**
   * Get Businesses By Category
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - The next middleware
   * @return {object} Message and data of the business(es)
   * @memberof BusinessController
   */
  static getByCategory(req, res, next) {
    const { category } = req.query;
    if (!category) {
      return next();
    }
    const filteredBusinesses
        = businesses.filter(business => business.category.toLowerCase() === category.toLowerCase());

    res.status(200).send({
      message: `Gotten business(es) under ${category} category`,
      data: filteredBusinesses
    });
  }
}

export default BusinessMiddleware;
