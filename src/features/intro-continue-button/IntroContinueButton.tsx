import TelegramApi from "@shared/api/telegram";
import useRouteNavigation from "@shared/hooks/useRouteNavigation";
import { UiButton } from "@shared/ui";

const IntroContinueButton = ({ beforeClick }: { beforeClick: () => Promise<void> }) => {
  const { navigateToHome } = useRouteNavigation();

  const handleClick = async () => {
    TelegramApi.vibrate();
    await beforeClick();
    navigateToHome();
  };

  return (
    <UiButton theme="primary" onClick={handleClick} block>
      Начать
    </UiButton>
  );
};

export default IntroContinueButton;
