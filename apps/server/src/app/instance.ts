import Fastify from "fastify";

const app = Fastify({
  logger: {
    level: "error",
    file: "server-errors.log",
  },
});

export default app;
