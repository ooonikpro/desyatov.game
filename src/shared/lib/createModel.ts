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

const createModel = <S extends ZStoreState, M extends ZStoreMethods>(fn: ZStoreInitFunction<ZStore<S, M>>) => {
  const store = create<ZStore<S, M>>()(
    immer(
      devtools((set, get) => {
        const getState: ZStoreGetter<ZStore<S, M>> = () => get().state;
        const setState: ZStoreSetter<ZStore<S, M>> = (produce) =>
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
    use: (keyOrSelector) => {
      if (typeof keyOrSelector === "function") return store(keyOrSelector);
      else return store((state) => (state.state as S["state"])[keyOrSelector as keyof S["state"]]);
    },
  } as ZustandModel<ZStore<S, M>>;
};

export default createModel;
