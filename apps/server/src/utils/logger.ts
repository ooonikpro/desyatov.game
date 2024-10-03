import app from "@app";

const logger = (message: string, type?: "warn" | "error" | "info") => {
  switch (type) {
    case "warn":
      app.log.warn(message);
      break;
    case "error":
      app.log.error(message);
      break;
    case "info":
      console.info(message);
      break;
    default:
      app.log.log(message);
  }
};

export default logger;
