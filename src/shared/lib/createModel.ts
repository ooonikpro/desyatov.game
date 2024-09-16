import { create } from "zustand";

import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  ZStore,
  ZStoreGetter,
  ZStoreInitFunction,
  ZStoreMethods,
  ZStoreSetter,
  ZStoreState,
  ZustandModel,
} from "@shared/types";

const createModel = <S extends ZStore<ZStoreState, ZStoreMethods>>(fn: ZStoreInitFunction<S>) => {
  const store = create<S>()(
    immer(
      devtools((set, get) => {
        const getState: ZStoreGetter<S> = () => get().state;
        const setState: ZStoreSetter<S> = (produce) =>
          set((rawState) => {
            produce(rawState.state);
          });

        return fn(setState, getState);
      }),
    ),
  );

  return {
    ...store.getState().methods,
    get: (key) => (store.getState().state as S["state"])[key],
    use: (key) => store((state) => (state.state as S["state"])[key]),
  } as ZustandModel<S>;
};

export default createModel;
