const sql = require("./db.js");

// constructor
const User = function(user) {
    this.nom = user.nom;
    this.prenom = customer.prenom;
    this.age = customer.age;
  };
  
User.getAll = result => {
    sql.query(" SELECT * FROM users ", (err, res) => {
        if (err) {
            console.log("error: " , err);
            result (null, err);
            return;
        }
        console.log("user : ", res);
        result(null, res);
    });
};

module.exports = User;