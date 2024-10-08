import getWebApp from "../lib/getWebApp";

const vibrate = () => {
  const webApp = getWebApp();

  if (webApp) webApp.HapticFeedback.impactOccurred("soft");
};

export default vibrate;
