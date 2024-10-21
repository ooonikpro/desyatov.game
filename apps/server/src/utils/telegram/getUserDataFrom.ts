import { WebAppInitDataType, WebAppParsedUserType } from "./types";

const getUserDataFrom = (
  initData: WebAppInitDataType,
): WebAppParsedUserType => {
  const parsedData = Object.fromEntries(
    new URLSearchParams(decodeURIComponent(initData)).entries(),
  );

  const user = JSON.parse(parsedData.user);

  user.telegram_user_id = user.id;

  delete user.id;

  return user;
};

export default getUserDataFrom;
