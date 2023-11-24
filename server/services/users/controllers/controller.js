const User = require('../models/User');

class Controller {
  static async findAllUser(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async findUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await User.deleteById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;
