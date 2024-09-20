// import database from "../db/dbConnect.js";
// import { Role } from "./role.model.js";
// const { sequelize, DataTypes } = database;

// export const Permission = sequelize.define(
//   "Permission",
//   {
//     permission_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       unique: true,
//       autoIncrement: true,
//     },
//     permission_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//     },
//     role_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Role,
//         key: "role_id",
//       },
//       onDelete: "CASCADE",
//       onUpdate: "CASCADE",
//     },
//   },
//   { timestamps: true }
// );

// Role.hasMany(Permission, {
//   foreignKey: "role_id",
//   as: "permissions",
// });

// Permission.belongsTo(Role, {
//   foreignKey: "role_id",
//   as: "role",
// });
