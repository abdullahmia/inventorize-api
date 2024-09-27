import { randomBytes } from "crypto";
import winston from "winston";
import config from "../config/config.js";

const { json, printf, timestamp, combine } = winston.format;
const timestampFromat = "MMM-DD-YYYY HH:mm:ss";
const appVersion = process.env.npm_package_version;
const LogIndentation = {
  MD: 4,
};

const generateLogId = () => randomBytes(16).toString("hex");

export const logger = winston.createLogger({
  format: combine(
    timestamp({ format: timestampFromat }),
    json(),
    printf(({ timestamp, level, message, ...data }) => {
      const response = {
        level,
        logId: generateLogId(),
        timestamp,
        appInfo: {
          appVersion,
          environment: config.nodeEnv,
          processId: process.pid,
        },
        message,
        data,
      };
      return JSON.stringify(response, null, LogIndentation.MD);
    })
  ),
  transports: [new winston.transports.Console()],
});
