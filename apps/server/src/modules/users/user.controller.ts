import createCommonResponse from "@utils/createCommonResponse";
import { getUsers } from "./user.model";
import createController from "@utils/createController";

export const getUsersController = createController(async (request, reply) => {
  const data = await getUsers();

  reply.send(createCommonResponse(data));
});
