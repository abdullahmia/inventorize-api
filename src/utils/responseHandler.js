const responseHandler = (statusCode, message, data) => {
  let resData = JSON.parse(JSON.stringify(data));

  if (resData && resData.password) {
    delete resData.password;
  }

  return {
    statusCode,
    status: "success",
    message,
    ...(resData && { data: resData }),
  };
};

export default responseHandler;
