export default class Logger {
  colors = {
    error: "\x1b[31m",
    warn: "\x1b[33m",
    info: "\x1b[32m",
    debug: "\x1b[36m",
  };
  constructor() {}
  error(message: string, ...args: any[]) {
    console.log(this.colors.error, message, ...args);
  }
  warn(message: string, ...args: any[]) {
    console.log(this.colors.warn, message, ...args);
  }
  info(message: string, ...args: any[]) {
    console.log(this.colors.info, message, ...args);
  }
  debug(message: string, ...args: any[]) {
    console.log(this.colors.debug, message, ...args);
  }
}
