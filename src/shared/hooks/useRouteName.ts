import routerStore from "@shared/store/router-store";

const useRouteName = () => {
  return routerStore((state) => state.state.routeName);
};

export default useRouteName;
