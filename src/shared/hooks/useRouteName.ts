import routerStore from "@shared/store/router-store";

const useRouteName = () => routerStore.use("routeName");

export default useRouteName;
