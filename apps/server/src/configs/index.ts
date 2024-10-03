import { FastifyListenOptions } from "fastify";

export const applicationOrigin = "*";

export const serverConfig: FastifyListenOptions = {
  host: "localhost",
  port: 3000,
};

export const databaseConfig = {
  host: "localhost",
  port: "5432",
  username: "bob",
  password: "bob",
  database: "fitness",
};
