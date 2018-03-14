import bcrypt from 'bcrypt';
import fakeDb from '../dummyModels/index';

const { user } = fakeDb;

/**
 * @class UserController
 * @classdesc implements sign in and sign up
 */
class UserController {
  /**
   * Signs up a user
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and user data
   * @memberof UserController
   */
  static addUser(req, res) {
    const hashPassword = bcrypt.hashSync(req.body.password, 12);
    const { username, email } = req.body;
    const newUser = {
      id: user[user.length - 1].id + 1,
      username,
      email,
      password: hashPassword
    };
    user.push(newUser);
    res.status(201).json({
      message: 'Signed up successfully!',
      data: user[user.length - 1]
    });
  }

  /**
   * Signs in a user
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Message and user data
   * @memberof UserController
   */
  static signIn(req, res) {
    const { username, password } = req.body;
    res.status(200).json({
      Message: 'Signed in successfully!',
      data: {
        username,
        password
      }
    });
  }
}

export default UserController;
