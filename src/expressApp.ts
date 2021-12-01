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

const v1Rotues = require("./API_Routes/v1/");

const app = express();

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
