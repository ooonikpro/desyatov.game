import { getUsers } from "@models/user.model";
import { FastifyReply, FastifyRequest } from "fastify";

export const getUsersController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const data = await getUsers(request.server);

  reply.send(data);
};
