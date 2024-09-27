import { redactData } from "./redactData.js";

export const formatHTTPLoggerResponse = (
  req,
  res,
  responseBody,
  requestStartTime
) => {
  let responseObject = JSON.parse(responseBody);
  let requestDuration;

  if (responseObject?.data) {
    responseObject = {
      ...responseObject,
      data: "Hidden",
    };
  }

  if (requestStartTime) {
    const endTime = Date.now() - requestStartTime;
    requestDuration = `${endTime / 1000}s`;
  }

  return {
    request: {
      headers: req.headers,
      host: req.headers.host,
      baseUrl: req.baseUrl,
      url: req.url,
      method: req.method,
      body: redactData(req.body),
      params: req?.params,
      query: req?.query,
      clientIp: req?.headers["x-forwarded-for"] || req?.socket.remoteAddress,
    },
    response: {
      headers: res.getHeaders(),
      requestDuration,
      responseObject: responseObject,
    },
  };
};
