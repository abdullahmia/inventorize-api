import database from "../db/dbConnect.js";

const { sequelize, DataTypes } = database;

export const Category = sequelize.define(
  "category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: (category) => {
        category.slug = category.name.toLowerCase().replace(/ /g, "-");
      },
      beforeUpdate: (category) => {
        category.slug = category.name.toLowerCase().replace(/ /g, "-");
      },
    },
  }
);
