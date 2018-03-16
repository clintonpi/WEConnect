import fakeDb from '../dummyModels/index';

const { business } = fakeDb;

/**
 * @class BusinessController
 * @classdesc Implements user being able to register a business, update business profile,
 *  delete a business, get a business and get all businesses
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

  /**
   * Delete Business
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and deleted business data
   * @memberof BusinessController
   */
  static deleteBusiness(req, res) {
    const businessId = parseInt(req.params.id, 10);
    let deletedBusiness;
    business.forEach((bus) => {
      if (bus.id === businessId) {
        const businessIndex = business.indexOf(bus);
        deletedBusiness = bus;
        business.splice(businessIndex, 1);
      }
    });
    res.status(200).json({
      message: 'Business deleted successfully!',
      data: deletedBusiness
    });
  }

  /**
   * Get A Business
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and gotten business data
   * @memberof BusinessController
   */
  static getBusiness(req, res) {
    const businessId = parseInt(req.params.id, 10);
    let gottenBusiness;
    business.forEach((bus) => {
      if (bus.id === businessId) {
        gottenBusiness = bus;
      }
    });
    res.status(200).json({
      message: 'Business gotten successfully!',
      data: gottenBusiness
    });
  }

  /**
   * Get All Businesses
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and all businesses data
   * @memberof BusinessController
   */
  static getAllBusinesses(req, res) {
    res.status(200).json({
      message: 'Businesses gotten successfully!',
      data: business
    });
  }
}

export default BusinessController;
