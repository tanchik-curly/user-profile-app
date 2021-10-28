import { DataTypes, Model } from "sequelize";

import db from "../config/connection";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    placeOfBirth: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    tableName: "users",
    modelName: "User",
  }
);

export default User;
