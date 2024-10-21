const env = import.meta.env;

const ENVIRONMENTS = {
  TelegramWebAppInitData: env["VITE_TelegramWebAppInitData"] as
    | string
    | undefined,
  isProduction: env["PROD"] as boolean,
  isDevelopment: env["DEV"] as boolean,
};

export default ENVIRONMENTS;
