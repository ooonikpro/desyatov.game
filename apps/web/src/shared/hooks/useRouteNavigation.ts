import { useTransition } from "react";
import routerStore from "@shared/store/router-store";

const useRouteNavigation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { get, use, ...methods } = routerStore;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransition] = useTransition();

  const withTransition = (fn: () => void) => () => startTransition(() => fn());

  return {
    navigateToHome: withTransition(methods.navigateToHome),
    navigateToCalendar: withTransition(methods.navigateToCalendar),
    navigateToStatistics: withTransition(methods.navigateToStatistics),
    navigateToProfile: withTransition(methods.navigateToProfile),
  };
};

export default useRouteNavigation;
