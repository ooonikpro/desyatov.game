import { getUsersController } from "./user.controller";
import createModule from "@utils/createModule";

const userModule = createModule((server) => {
  server.get("/users", getUsersController);
});

export default userModule;
