import type Fastify from "fastify";

export const getUsers = async (fastify: Fastify) => {
  return fastify.pg.transact(async (client) => {
    const query = 'SELECT * FROM "users"';
    const result = await client.query(query);
    return result.rows;
  });
};
