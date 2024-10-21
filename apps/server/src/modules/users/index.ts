import createModule from "@utils/createModule";

import userController from "./controller";

const userModule = createModule((server) => {
  server.post("/users/validate", userController.validateUser);
});

export default userModule;
