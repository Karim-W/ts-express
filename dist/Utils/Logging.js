"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor() {
        this.colors = {
            error: "\x1b[31m",
            warn: "\x1b[33m",
            info: "\x1b[32m",
            debug: "\x1b[36m",
        };
    }
    error(message, ...args) {
        console.log(this.colors.error, message, ...args);
    }
    warn(message, ...args) {
        console.log(this.colors.warn, message, ...args);
    }
    info(message, ...args) {
        console.log(this.colors.info, message, ...args);
    }
    debug(message, ...args) {
        console.log(this.colors.debug, message, ...args);
    }
}
exports.default = Logger;
//# sourceMappingURL=Logging.js.map