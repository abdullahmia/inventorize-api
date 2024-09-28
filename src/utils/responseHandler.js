const responseHandler = (statusCode, message, data, startTime) => {
  // Deep copy the data to avoid mutation
  let resData = JSON.parse(JSON.stringify(data));

  // Remove sensitive fields like password
  if (resData && resData.password) {
    delete resData.password;
  }

  // Calculate the execution time if the startTime is passed
  const executionTime = startTime ? `${Date.now() - startTime}ms` : null;

  return {
    statusCode,
    status: "success",
    message,
    ...(resData && { data: resData }),
    meta: {
      timestamp: new Date().toISOString(),
      ...(executionTime && { executionTime }),
    },
  };
};

export default responseHandler;
