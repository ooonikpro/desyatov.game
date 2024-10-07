export type WebAppInitDataType = string;

export type TelegramUserIdType = number;

export type WebAppParsedUserType = {
  telegram_user_id: TelegramUserIdType;
  first_name: string;
  last_name: string;
  username: string;
  photo_url: string;
};

export type UserDTO = WebAppParsedUserType & {
  id: number;
};
