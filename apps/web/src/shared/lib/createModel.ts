import { create } from "zustand";

import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  ZStoreType,
  ZStoreGetterType,
  ZStoreInitFunctionType,
  ZStoreMethodsType,
  ZStoreSetterType,
  ZStoreStateType,
  ZustandModelType,
} from "@shared/types";

const createModel = <S extends ZStoreStateType, M extends ZStoreMethodsType>(
  fn: ZStoreInitFunctionType<ZStoreType<S, M>>,
) => {
  const store = create<ZStoreType<S, M>>()(
    immer(
      devtools((set, get) => {
        const getState: ZStoreGetterType<ZStoreType<S, M>> = () => get().state;
        const setState: ZStoreSetterType<ZStoreType<S, M>> = (produce) =>
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
      else
        return store(
          (state) =>
            (state.state as S["state"])[keyOrSelector as keyof S["state"]],
        );
    },
  } as ZustandModelType<ZStoreType<S, M>>;
};

export default createModel;
