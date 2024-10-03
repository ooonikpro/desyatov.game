import { FastifyInstance } from "fastify";

import { getDataController } from "@controllers/example.controller";

export const Routes = async (fastify: FastifyInstance) => {
  fastify.get("/", getDataController);
};
