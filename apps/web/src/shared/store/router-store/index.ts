import RoutesNamesEnum from "@shared/constants/routesNamesEnum";
import createStore from "@shared/lib/createModel";
import { RouterMethodsType, RouterStateType } from "./types";

const routerStore = createStore<RouterStateType, RouterMethodsType>((set) => {
  const setRouteName = (routeName: RoutesNamesEnum) => {
    set((state) => (state.routeName = routeName));
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
