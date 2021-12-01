"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logging_1 = __importDefault(require("./Utils/Logging"));
const ExpressApp_1 = __importDefault(require("./ExpressApp"));
const ServerConfig_1 = __importDefault(require("./Config/ServerConfig"));
let logger = new Logging_1.default();
let server = ExpressApp_1.default.listen(ServerConfig_1.default.port, () => {
    logger.info(`Listening to port ${ServerConfig_1.default.port}`);
});
const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info("Server closed");
            process.exit(1);
        });
    }
    else {
        process.exit(1);
    }
};
const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};
process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
process.on("SIGTERM", () => {
    logger.info("SIGTERM received");
    if (server) {
        server.close();
    }
});
//# sourceMappingURL=index.js.map