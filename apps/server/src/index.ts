import app from "@app";
import userModule from "@modules/users";
import cors from "@plugins/cors.plugin";
import database from "@plugins/database.plugin";

import bootstrap from "@utils/bootstrap";

bootstrap({
  server: app,
  plugins: [cors, database],
  modules: [userModule],
});
