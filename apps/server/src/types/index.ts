import type { FastifyInstance, FastifyListenOptions } from "fastify";

export type ServerType = FastifyInstance;
export type ServerModuleType = (server: ServerType) => void;

export type BootstrapPayloadType = {
  config: Pick<FastifyListenOptions, "host" | "port">;
  server: ServerType;
  plugins: Array<ServerModuleType>;
  modules: Array<ServerModuleType>;
};
