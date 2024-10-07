import createModel from "@utils/createModel";
import { UserDTO, WebAppParsedUserType } from "@utils/telegram/types";

const addUser = createModel<Promise<UserDTO["id"]>>(
  (database, telegram_user_id: WebAppParsedUserType["id"]) => {
    return database.transact((client) =>
      client.query(`INSERT INTO users(telegram_user_id) VALUES($1);`, [
        telegram_user_id,
      ]),
    );
  },
);

export default addUser;
