import type { FastifyListenOptions } from "fastify/types/instance";

export const applicationOrigin = "http://localhost:3000";

export const serverConfig: FastifyListenOptions = {
  host: "localhost",
  port: "3000",
};

export const databaseConfig = {
  host: "localhost",
  port: "5432",
  username: "bob",
  password: "bob",
  database: "fitness",
};
