const Joi = require("joi");
const UserService = require('../services/UserService')

class UserController {

  registration(req, res) {
    res.render("registration", { title: "Registration page" });
  }

  async create(req, res) {
    const body = req.body;
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().allow(""),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      confirm_password: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .strict(),
    });
    console.log(body);

    const { error } = schema.validate(body, { abortEarly: false });
    if (error) {
      res.json({
        errors: error.details.map((err) => err.message),
      });
      return;
    }
    try {
      const user = await UserService.create(body);
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  login(req, res) {
    res.render("login", { title: "Login page" });
  }

  async auth(req, res) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.json({
        errors: error.details.map((err) => err.message),
      });
    }
    try {
      const user = await UserService.login(req.body);
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new UserController()