import TelegramApi from "@shared/api/telegram";
import useRouteNavigation from "@shared/hooks/useRouteNavigation";
import { UiButton } from "@shared/ui";

const IntroContinueButton = () => {
  const { navigateToHome } = useRouteNavigation();

  const handleClick = () => {
    TelegramApi.vibrate();
    navigateToHome();
  };

  return (
    <UiButton theme="primary" onClick={handleClick} block>
      Начать
    </UiButton>
  );
};

export default IntroContinueButton;
