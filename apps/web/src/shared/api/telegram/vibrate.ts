const vibrate = () => {
  try {
    window.Telegram.WebApp.HapticFeedback.impactOccurred("soft");
  } catch (e) {
    console.error(e);
  }
};

export default vibrate;
