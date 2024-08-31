import TelegramApi from "@shared/api/telegram";
import useRouteNavigation from "@shared/hooks/useRouteNavigation";
import { UiButton } from "@shared/ui";

// eslint-disable-next-line no-unused-vars
const IntroContinueButton = ({ beforeClick }: { beforeClick: () => void }) => {
  const { navigateToHome } = useRouteNavigation();

  const handleClick = async () => {
    TelegramApi.vibrate();

    beforeClick();
    navigateToHome();
  };

  return (
    <UiButton theme="primary" onClick={handleClick} block>
      Начать
    </UiButton>
  );
};

export default IntroContinueButton;
