const getWebApp = (): Telegram["WebApp"] | null => {
  try {
    return window.Telegram.WebApp;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.log("Telegram is not found!");

    return null;
  }
};

export default getWebApp;
