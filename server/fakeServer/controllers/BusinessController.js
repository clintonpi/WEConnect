import fakeDb from '../dummyModels/index';

const { business } = fakeDb;

/**
 * @class BusinessController
 * @classdesc implements user being able to register a business
 */
class BusinessController {
  /**
   * Register Business
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and user data
   * @memberof BusinessController
   */
  static registerBusiness(req, res) {
    const {
      name, location, category, description, userId
    } = req.body;
    const newBusiness = {
      id: business[business.length - 1].id + 1,
      name,
      location,
      category,
      description,
      userId
    };
    business.push(newBusiness);
    res.status(201).json({
      message: 'Business registered successfully!',
      data: business[business.length - 1]
    });
  }
}

export default BusinessController;
