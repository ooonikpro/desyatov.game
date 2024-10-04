import { BootstrapPayloadType } from "@types";
import logger from "./logger";

const bootstrap = async ({
  config,
  server,
  plugins,
  modules,
}: BootstrapPayloadType) => {
  try {
    plugins.forEach((plug) => plug(server));
    modules.forEach((module) => module(server));

    await server.listen(config);

    logger(
      `Server is running on http://${config.host}:${config.port}`,
      "info",
    );
  } catch (err) {
    logger(err, "error");
    process.exit(1);
  }
};

export default bootstrap;
