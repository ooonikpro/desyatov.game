import getWebApp from "../lib/getWebApp";

const initWebApp = () => {
  const webApp = getWebApp();

  if (webApp) {
    webApp.expand();
    webApp.disableVerticalSwipes();
  }
};

export default initWebApp;
