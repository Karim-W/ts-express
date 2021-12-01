import httpStatus from "http-status";
import Logger from "../Utils/Logging";
import ApiError from "../Utils/API_Error";
import config from "../Config/ServerConfig";
const logger = new Logger();

export const errorConverter = (err: any, req: any, res: any, next: any) => {
  let error = err;
  if (!(error instanceof ApiError)) {
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err: any, req: any, res: any, next: any) => {
  let { statusCode, message } = err;
  if (config.env === "production" && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(config.env === "development" && { stack: err.stack }),
  };

  if (config.env === "development") {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};
