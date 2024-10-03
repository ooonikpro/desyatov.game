import { getUsersController } from "@controllers/user.controller";
import { FastifyInstance } from "fastify";

export const UserRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/users", getUsersController);
};
