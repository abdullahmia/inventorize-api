export class GeneralError extends Error {
  constructor(message, code = "GENERAL_ERROR") {
    super(message);
    this.name = "GeneralError";
    this.statusCode = 500;
    this.code = code;
    this.meta = {
      timestamp: new Date().toISOString(),
      documentationUrl: "https://api.example.com/docs/errors/GENERAL_ERROR",
    };
  }
}

export class BadRequestError extends GeneralError {
  constructor(message, fields = {}) {
    super(message, "VALIDATION_ERROR");
    this.name = "BadRequestError";
    this.statusCode = 400;
    this.fields = fields;
    this.meta.documentationUrl =
      "https://api.example.com/docs/errors/VALIDATION_ERROR";
  }
}

export class UnauthorizedError extends GeneralError {
  constructor(message) {
    super(message, "UNAUTHORIZED_ERROR");
    this.name = "UnauthorizedError";
    this.statusCode = 401;
    this.meta.documentationUrl =
      "https://api.example.com/docs/errors/UNAUTHORIZED_ERROR";
  }
}

export class NotFoundError extends GeneralError {
  constructor(message) {
    super(message, "NOT_FOUND_ERROR");
    this.name = "NotFoundError";
    this.statusCode = 404;
    this.meta.documentationUrl =
      "https://api.example.com/docs/errors/NOT_FOUND_ERROR";
  }
}

export class ConflictError extends GeneralError {
  constructor(message) {
    super(message, "CONFLICT_ERROR");
    this.name = "ConflictError";
    this.statusCode = 409;
    this.meta.documentationUrl =
      "https://api.example.com/docs/errors/CONFLICT_ERROR";
  }
}
