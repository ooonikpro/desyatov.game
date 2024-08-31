import RoutesNamesEnum from "@shared/constants/routesNamesEnum";

export type RouteStoreType = {
  state: {
    routeName: RoutesNamesEnum;
  };

  methods: {
    navigateToHome: () => void;
    navigateToCalendar: () => void;
    navigateToStatistics: () => void;
    navigateToProfile: () => void;
  };
};
