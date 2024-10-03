import createModule from "@utils/createModule";
import logger from "@utils/logger";

const errorHandlerPlugin = createModule((server) => {
  server.setErrorHandler((error, _, reply) => {
    logger(error.stack ?? error.message, "error");

    reply.status(200).send({
      message: error.message,
      status: "error",
    });
  });
});

export default errorHandlerPlugin;
