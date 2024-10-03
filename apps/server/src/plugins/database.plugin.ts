import fastifyPostgres from "@fastify/postgres";
import { databaseConfig } from "@configs";
import { ServerType } from "@types";
import createModule from "@utils/createModule";

export type DBType = ServerType["pg"];

const databasePlugin = createModule((server) => {
  const { host, port, database, username, password } = databaseConfig;

  server.register(fastifyPostgres, {
    connectionString: `postgres://${username}:${password}@${host}:${port}/${database}`,
  });
});

export const getDatabase = <A extends ServerType, P extends DBType>(
  server: A,
) => {
  return server.pg as P;
};

export default databasePlugin;
