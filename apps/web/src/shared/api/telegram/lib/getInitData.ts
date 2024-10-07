import env from "@shared/constants/env";

import getWebApp from "./getWebApp";

const getInitData = () => {
  if (env.isProduction) {
    return getWebApp()?.initData;
  }

  if (env.isDevelopment) return env.TelegramWebAppInitData;

  return null;
};

export default getInitData;
