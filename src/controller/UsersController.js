const AppError = require("../utils/AppError")

class UsersController {

  create(req, res) {
    const { name, email, senha } = req.body

    if (!name) {
      throw new AppError("O nome é obrigatório!")
    }

    res.status(201).json({ name, email, senha })
  }
}

module.exports = UsersController;