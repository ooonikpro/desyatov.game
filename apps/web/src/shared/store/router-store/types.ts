import RoutesNamesEnum from "@shared/constants/routesNamesEnum";

export type RouterStateType = {
  routeName: RoutesNamesEnum;
};

export type RouterMethodsType = {
  navigateToHome: () => void;
  navigateToCalendar: () => void;
  navigateToStatistics: () => void;
  navigateToProfile: () => void;
};
