import { ReactNode, useState } from "react";
import useMount from "react-use/lib/useMount";

import TelegramApi from "@shared/api/telegram";
import ENVIRONMENTS from "@shared/constants/env";
import UiConditionalRender from "@shared/ui/ui-conditional-render";

import s from "./AppUserProvider.module.scss";

const AppUserProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useMount(() => {
    TelegramApi.userValidate()
      .then(() => setIsSuccess(true))
      .catch(() => setIsSuccess(false))
      .finally(() => setIsLoading(false));
  });

  if (isLoading) return <div className={s.loader}>Загрузка...</div>;

  return (
    <UiConditionalRender
      condition={isSuccess || ENVIRONMENTS.isProduction}
      other={
        <div className={s.fallback}>Не удалось авторизовать пользователя</div>
      }
    >
      {children}
    </UiConditionalRender>
  );
};

export default AppUserProvider;
