import cors from "cors";
import express from "express";
import fs from "fs";
import yaml from "js-yaml";
import swaggerUi from "swagger-ui-express";
import rootRouter from "./api/index.js";
import config from "./config/config.js";
import db from "./db/dbConnect.js";
import globalErrorHandler from "./middleware/errors/globalErrorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Docs
if (config.nodeEnv === "development") {
  const swaggerDocument = yaml.load(fs.readFileSync("./docs/docs.yml", "utf8"));
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// Routes
app.use("/api", rootRouter);
app.use("/api/health", (req, res, next) => {
  res.send("OK");
});

app.use(globalErrorHandler);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
  db.sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to the database");
      // return db.sequelize.sync({ alter: true });
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
  // db.sequelize.sync({ force: true });
});
