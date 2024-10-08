import addUser from "@modules/users/model/addUser";
import createModel from "@utils/createModel";
import telegram from "@utils/telegram";

import getUserByTelegramId from "./getUserByTelegramId";

const validateAndRegister = createModel(async (database, initData) => {
  const isValidHash = telegram.isValidHashFrom(initData);

  if (!isValidHash) return false;

  const parsedUserData = telegram.getUserDataFrom(initData);
  let results = await getUserByTelegramId(parsedUserData.telegram_user_id);

  if (results.rows.length === 0) {
    await addUser(parsedUserData.telegram_user_id);
    results = await getUserByTelegramId(parsedUserData.telegram_user_id);
  }

  return {
    ...parsedUserData,
    ...results.rows[0],
  };
});

export default validateAndRegister;
