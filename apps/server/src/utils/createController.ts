import { ServerInstanceType } from "@app";
import { FastifyReply, FastifyRequest } from "fastify";

const createController = <Req extends FastifyRequest, Rep extends FastifyReply>(
  handler: (request: Req, reply: Rep) => ServerInstanceType,
) => handler;

export default createController;
