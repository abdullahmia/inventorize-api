import { randomBytes } from "crypto";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import config from "../config/config.js";

const { json, printf, timestamp, combine, label, colorize } = winston.format;
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
  transports: [
    // Log to console
    // new winston.transports.Console(),
    // Log to file
    new DailyRotateFile({
      filename: "logs/rotating-logs-%DATE%.log",
      datePattern: "MMMM-DD-YYYY",
      zippedArchive: false, // zip logs true/false
      maxSize: "20m", // rotate if file size exceeds 20 MB
      maxFiles: "14d", // max files
    }),
  ],
});

export const cliLogger = winston.createLogger({
  format: combine(
    label({ label: appVersion }),
    timestamp({ format: timestampFromat }),
    colorize({ level: true }),
    printf(
      ({ level, message, label, timestamp }) =>
        `[${timestamp}] ${level} (${label}): ${message}`
    )
  ),
  transports: [new winston.transports.Console()],
});
