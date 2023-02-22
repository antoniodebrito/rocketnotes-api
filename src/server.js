require("express-async-errors");
const AppError = require("./utils/AppError");
const express = require("express");
const routes = require('./routes');
const app = express();
const migrationsRun = require("./database/sqlite/migrations");
app.use(express.json());

app.use(routes);

migrationsRun();

app.use((error, req, res, next) => {
  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});


const PORT = 5500;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));