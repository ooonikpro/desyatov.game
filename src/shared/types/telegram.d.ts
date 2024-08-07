declare global {
  interface Window {
    Telegram: {
      WebApp: {
        expand: () => void;
        disableVerticalSwipes: () => void;

        HapticFeedback: {
          // eslint-disable-next-line no-unused-vars
          impactOccurred: (style: "light" | "medium" | "soft") => void;
        };
      };
    };
  }
}
