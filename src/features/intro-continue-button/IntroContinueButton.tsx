import TelegramApi from "@shared/api/telegram";
import { UiButton } from "@shared/ui";

const IntroContinueButton = () => {
  const handleClick = () => TelegramApi.vibrate();

  return (
    <UiButton theme="primary" onClick={handleClick} block>
      Начать
    </UiButton>
  );
};

export default IntroContinueButton;
