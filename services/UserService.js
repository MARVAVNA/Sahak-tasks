const { users } = require('../models/index.js')
const bcrypt = require('bcrypt')

class UserService {
  async create(userData) {
    const data = {
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      password: userData.password,
    }
    const createdUser = await users.create(data);
    return createdUser;
  }

  async login(body) {
    const { email, password } = body;
    const user = await users.findOne({
      where: {
        email,
      },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw { error: "User not found" }
    }
  }
}

module.exports = new UserService()