import createModel from "@utils/createModel";
import { UserDTO, WebAppParsedUserType } from "@utils/telegram/types";

const getUserByTelegramId = createModel<
  Promise<Array<UserDTO>>,
  WebAppParsedUserType["id"]
>((database, telegram_user_id) => {
  return database.transact((client) =>
    client.query(`SELECT * FROM users WHERE telegram_user_id=$1`, [
      telegram_user_id,
    ]),
  );
});

export default getUserByTelegramId;
