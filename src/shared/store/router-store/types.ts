import RoutesNamesEnum from "@shared/constants/routesNamesEnum";
import { ZStore } from "@shared/types";

export type RouteStoreType = ZStore<
  {
    routeName: RoutesNamesEnum;
  },
  {
    navigateToHome: () => void;
    navigateToCalendar: () => void;
    navigateToStatistics: () => void;
    navigateToProfile: () => void;
  }
>;
