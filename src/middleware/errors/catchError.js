const catchError = (cotroller) => {
  return async (req, res, next) => {
    try {
      await cotroller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default catchError;
