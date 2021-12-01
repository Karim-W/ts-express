import dotenv from "dotenv";
import path from "path";
import Joi from "joi";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3199),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description("minutes after which access tokens expire"),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description("days after which refresh tokens expire"),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which reset password token expires"),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which verify email token expires"),
    SMTP_HOST: Joi.string().description("server that will send the emails"),
    SMTP_PORT: Joi.number().description("port to connect to the email server"),
    SMTP_USERNAME: Joi.string().description("username for email server"),
    SMTP_PASSWORD: Joi.string().description("password for email server"),
    EMAIL_FROM: Joi.string().description(
      "the from field in the emails sent by the app"
    ),
    AUTH0_authRequired: Joi.boolean().description("whether auth is required"),
    AUTH0_auth0Logout: Joi.boolean().description(
      "whether auth0 logout is required"
    ),
    AUTH0_secret: Joi.string().description("secret for auth0"),
    AUTH0_baseURL: Joi.string().description("base url for auth0"),
    AUTH0_clientID: Joi.string().description("client id for auth0"),
    AUTH0_issuerBaseURL: Joi.string().description("issuer base url for auth0"),
    AUTH0_audience: Joi.string().description("audience for auth0"),
    DB_TYPE: Joi.string().description("database type").required(),
    DB_HOST: Joi.string().description("database host").required(),
    DB_PORT: Joi.number().description("database port").required(),
    DB_NAME: Joi.string().description("database name").required(),
    DB_USER: Joi.string().description("database user").required(),
    DB_PASSWORD: Joi.string().description("database password").required(),
  })
  .unknown();

export default envVarsSchema;
