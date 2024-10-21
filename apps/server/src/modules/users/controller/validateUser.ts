import createCommonResponse from "@utils/createCommonResponse";
import createController from "@utils/createController";

import userModel from "@modules/users/model";

const validateUser = createController(async (request, reply) => {
  const initData = request.headers["user-data"];

  const result = await userModel.validateAndRegister(initData);

  reply.send(createCommonResponse(result));
});

export default validateUser;
