const initWebApp = () => {
  try {
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.disableVerticalSwipes();
  } catch (e) {
    console.error(e);
  }
};

export default initWebApp;
