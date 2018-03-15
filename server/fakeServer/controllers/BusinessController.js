import fakeDb from '../dummyModels/index';

const { business } = fakeDb;

/**
 * @class BusinessController
 * @classdesc Implements user being able to register a business and update business profile
 */
class BusinessController {
  /**
   * Register Business
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and business data
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

  /**
   * Update Business Profile
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and updated business data
   * @memberof BusinessController
   */
  static updateBusinessProfile(req, res) {
    const {
      name, location, category, description, userId
    } = req.body;
    const businessId = parseInt(req.params.id, 10);
    const editedBusinessProfile = {
      id: businessId,
      name,
      location,
      category,
      description,
      userId
    };
    business.forEach((bus) => {
      if (bus.id === businessId) {
        const businessIndex = business.indexOf(bus);
        business.splice(businessIndex, 1, editedBusinessProfile);
      }
    });
    res.status(200).json({
      message: 'Business profile updated successfully!',
      data: editedBusinessProfile
    });
  }
}

export default BusinessController;
