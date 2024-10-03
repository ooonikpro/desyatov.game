import cors from "@fastify/cors";
import fastifyPostgres from "@fastify/postgres";
import Fastify from "fastify";
import { Routes } from "@routes/example.route";

const fastify = Fastify({ logger: true });

fastify.register(fastifyPostgres, {
  connectionString: "postgres://bob:bob@localhost:5432/fitness",
});

fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
});

fastify.register(Routes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server is running on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
