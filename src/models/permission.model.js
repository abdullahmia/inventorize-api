import database from "../db/dbConnect.js";
import { Role } from "./role.model.js";
const { sequelize, DataTypes } = database;

export const Permission = sequelize.define(
  "permission",
  {
    permission_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    permission_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);

Permission.belongsToMany(Role, {
  through: "role_permission",
  foreignKey: "permission_id",
});

Role.belongsToMany(Permission, {
  through: "role_permission",
  foreignKey: "role_id",
});
