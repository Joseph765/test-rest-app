const users = require('../services/user.js');

module.exports = {
  getUsers: function(req, res) {
      return res.json({ users: users.getAll() });
  }
};