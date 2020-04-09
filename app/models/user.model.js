module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      matricule: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
    });
  
    return User;
  };