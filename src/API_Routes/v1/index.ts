import { Router } from "express";
// import helloRoute from "./hello.route";
const helloRoute = require("./hello.route");
// import docs from './docs';
import config from "../../Config/ServerConfig";
const router = Router();

const defaultRoutes = [
  {
    path: "/hello",
    route: helloRoute,
  },
];
// const devRoutes = [
//   // routes available only in development mode
//   {
//     path: "/docs",
//     route: docsRoute,
//   },
// ];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// if (config.env === "development") {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }
module.exports = router;
