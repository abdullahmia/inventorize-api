import { Sequelize } from "sequelize";
import config from "../config/config.js";

const sequelize = new Sequelize(
  config.databaseName,
  config.databaseUser,
  config.databasePass,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const db = {
  sequelize,
  DataTypes: Sequelize.DataTypes,
};

export default db;
