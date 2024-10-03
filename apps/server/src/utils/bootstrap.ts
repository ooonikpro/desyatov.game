import { BootstrapPayloadType } from "@types";
import logger from "./logger";
import { serverConfig } from "@configs";

const bootstrap = async ({
  server,
  plugins,
  modules,
}: BootstrapPayloadType) => {
  try {
    plugins.forEach((plug) => plug(server));
    modules.forEach((module) => module(server));

    await server.listen(serverConfig);

    logger(
      `Server is running on http://${serverConfig.host}:${serverConfig.port}`,
      "info",
    );
  } catch (err) {
    logger(err, "error");
    process.exit(1);
  }
};

export default bootstrap;
