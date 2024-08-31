import routerStore from "@shared/store/router-store";

const useRouteNavigation = () => {
  return routerStore((state) => state.methods);
};

export default useRouteNavigation;
