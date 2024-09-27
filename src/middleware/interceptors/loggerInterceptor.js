import { formatHTTPLoggerResponse } from "../../utils/formatHTTPLog.js";
import { logger } from "../../utils/logger.js";

export const logInterceptor = (req, res, next) => {
  const requestStartTime = Date.now();
  const originalSend = res.send;
  let responseSent = false;

  // Override res.send method
  res.send = function (body) {
    if (!responseSent) {
      if (res?.statusCode < 400) {
        logger.info(
          "Some success message",
          formatHTTPLoggerResponse(req, res, body, requestStartTime)
        );
      } else {
        logger.error(
          body?.message,
          formatHTTPLoggerResponse(req, res, body, requestStartTime)
        );
      }

      responseSent = true;
    }

    return originalSend.call(this, body);
  };

  next();
};
