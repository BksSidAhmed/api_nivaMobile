module.exports = app => {
  const users = require("../controllers/user.controller.js");

  // Retrieve all Customers
  app.get("/users", users.findAll);

};