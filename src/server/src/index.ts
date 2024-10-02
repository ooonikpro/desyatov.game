import cors from "@fastify/cors";
import fastify from "fastify";
import { Routes } from "./routes/example.route";

const server = fastify( { logger: true } );

server.register( cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
} );

server.register( Routes );

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();