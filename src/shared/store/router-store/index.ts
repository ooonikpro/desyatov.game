import { create } from "zustand";

import RoutesNamesEnum from "@shared/constants/routesNamesEnum";
import { RouteStoreType } from "./types";

const routerStore = create<RouteStoreType>((set) => {
  const setRouteName = (routeName: RoutesNamesEnum) => {
    set({ state: { routeName } });
  };

  return {
    state: {
      routeName: RoutesNamesEnum.intro,
    },
    methods: {
      navigateToHome: () => setRouteName(RoutesNamesEnum.home),
      navigateToCalendar: () => setRouteName(RoutesNamesEnum.calendar),
      navigateToStatistics: () => setRouteName(RoutesNamesEnum.statistics),
      navigateToProfile: () => setRouteName(RoutesNamesEnum.profile),
    },
  };
});

export default routerStore;
