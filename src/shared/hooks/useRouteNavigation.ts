import routerStore from "@shared/store/router-store";

const useRouteNavigation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { get, use, ...methods } = routerStore;

  return methods;
};

export default useRouteNavigation;
