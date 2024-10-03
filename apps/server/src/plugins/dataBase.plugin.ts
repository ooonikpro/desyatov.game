import { ServerInstanceType } from "@app";
import fastifyPostgres from "@fastify/postgres";
import { dataBaseConfig } from "@configs";

const registerDataBasePlugin = (app: ServerInstanceType) => {
  const { host, port, database, username, password } = dataBaseConfig;

  app.register(fastifyPostgres, {
    connectionString: `postgres://${username}:${password}@${host}:${port}/${database}`,
  });
};

export default registerDataBasePlugin;
