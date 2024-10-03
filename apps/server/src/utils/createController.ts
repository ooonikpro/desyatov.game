import { FastifyReply, FastifyRequest } from "fastify";

const createController = <
  Req extends FastifyRequest,
  Rep extends FastifyReply,
  Handler extends (request: Req, reply: Rep) => AnyType,
>(
  handler: Handler,
) => handler;

export default createController;
