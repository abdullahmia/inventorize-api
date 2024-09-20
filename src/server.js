import cors from "cors";
import express from "express";
import rootRouter from "./api/index.js";
import config from "./config/config.js";
import db from "./db/dbConnect.js";
import globalErrorHandler from "./middleware/errors/globalErrorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
});
