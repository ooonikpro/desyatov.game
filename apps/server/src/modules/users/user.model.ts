import createModel from "@utils/createModel";

export const getUsers = createModel((database) => {
  return database.transact(async (client) => {
    const query = 'SELECT * FROM "users"';
    const result = await client.query(query);
    return result.rows;
  });
});
