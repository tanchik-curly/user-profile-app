import { Sequelize } from "sequelize";
import config from "./config";

const db = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    port: config.development.port,
  }
);

db.authenticate()
  .then(() => {
    console.log("Connection to db successful!");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
