import database from "../db/dbConnect.js";
const { sequelize, DataTypes } = database;

export const Role = sequelize.define(
  "role",
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
