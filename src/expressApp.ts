import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import passport from "passport";
import config from "./Config/ServerConfig";
import { AuthLimiter } from "./Middlewares/AuthLimiter";
import httpStatus from "http-status";
import { ApiError } from "./Utils/API_Error";
import { errorHandler, errorConverter } from "./Middlewares/ErrorHandler";
import { auth } from "express-openid-connect";
import { MikroORM } from "@mikro-orm/core";
import DbConfig from "./mikro-orm.config";
import Logger from "./Utils/Logging";
const logger = new Logger();

const v1Rotues = require("./API_Routes/v1/");

const app = express();
const main = async () => {
  let orm = await MikroORM.init(DbConfig);
  await orm.getMigrator().up();
  console.log("Migrations complete");
  app.set("ctx", orm);
  app.set("logger", logger);
};
main().catch((err) => {
  logger.error(err);
});

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
// app.use(cors());
// app.options("*", cors());

// app.use(passport.initialize());

// if (config.env === "production") {
//   app.use("/v1/auth", AuthLimiter);
// }
app.use(auth(config.Auth0));
app.use("/v1", v1Rotues);
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// app.use((req: express.Request, res: express.Response, next) => {
//   next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
// });

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
