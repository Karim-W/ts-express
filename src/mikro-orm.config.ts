import { user } from "./entities/user";
import { MikroORM } from "@mikro-orm/core";
import config from "./Config/ServerConfig";
import path from "path";
export default {
  dbName: config.database.name,
  type: config.database.type,
  debug: true,
  user: config.database.username,
  password: config.database.password,
  entities: [user],
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[jt]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
