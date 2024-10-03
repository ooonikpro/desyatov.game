import { FastifyReply, FastifyRequest } from "fastify";

import { getData } from "@models/example.model";

export const getDataController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const data = await getData(request.server);

  reply.send(data);
};
