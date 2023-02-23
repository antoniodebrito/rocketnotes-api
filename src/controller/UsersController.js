const AppError = require("../utils/AppError")
const sqlConnection = require("../database/sqlite")


class UsersController {

  async create(req, res) {
    const { name, email, password } = req.body;

    const database = await sqlConnection();
    const checkUserExist = await database
      .get("SELECT * FROM users WHERE email = (?)", [email]);

    if (checkUserExist) {
      throw new AppError("Este e-mail já está em uso.");
    }
    
    return response.status(201).json();
  }
}

module.exports = UsersController;