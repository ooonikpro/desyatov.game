import app from "@app";
import { serverConfig } from "@configs";
import userModule from "@modules/users";
import cors from "@plugins/cors.plugin";
import database from "@plugins/database.plugin";
import errorHandler from "@plugins/errorHandler.plugin";

import bootstrap from "@utils/bootstrap";

bootstrap({
  config: serverConfig,
  server: app,
  plugins: [cors, database, errorHandler],
  modules: [userModule],
});
