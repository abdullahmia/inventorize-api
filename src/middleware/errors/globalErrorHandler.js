import { cliLogger } from "../../utils/logger.js";

const globalErrorHandler = (err, req, res, next) => {
  let code = err.statusCode || 500;

  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(code).json({
      statusCode: code,
      message: err.errors[0].message,
      status: "error",
    });
  }

  cliLogger.error(err);

  return res.status(code).json({
    statusCode: code,
    message: err.message,
    status: "error",
  });
};

export default globalErrorHandler;
