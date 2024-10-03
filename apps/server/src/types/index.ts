import type Fastify from "fastify";

export type ServerType = Fastify;
export type ServerModuleType = <T>(server: ServerType) => T;

export type BootstrapPayloadType = {
  server: ServerType;
  plugins: Array<ServerModuleType>;
  modules: Array<ServerModuleType>;
};
