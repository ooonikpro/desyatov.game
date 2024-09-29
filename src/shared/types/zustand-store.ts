import { Draft } from "immer";

export type ZStoreStateType = Record<string, any>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type ZStoreMethodsType = Record<string, Function>;

export type ZStoreType<S extends ZStoreStateType, M extends ZStoreMethodsType> = {
  state: S;
  methods: M;
};

export type ZStoreGetterType<S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>> = () => S["state"];

// eslint-disable-next-line no-unused-vars
export type ZStoreProducerType<S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>> = (
  draftState: Draft<S>["state"],
) => void;

// eslint-disable-next-line no-unused-vars
export type ZStoreSetterType<S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>> = (
  produce: ZStoreProducerType<S>,
) => void;

export type ZStoreInitFunctionType<S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>> = (
  // eslint-disable-next-line no-unused-vars
  set: ZStoreSetterType<S>,
  // eslint-disable-next-line no-unused-vars
  get: ZStoreGetterType<S>,
) => S;

export type ZustandModelType<S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>> = {
  // Get once
  // eslint-disable-next-line no-unused-vars
  get: <K extends keyof S["state"]>(key: K) => S["state"][K];
  // Sync with store and get value
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-types
  use: <K extends keyof S["state"] | (() => any)>(
    // eslint-disable-next-line no-unused-vars
    keyOrSelector: K,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/ban-types
  ) => K extends keyof S["state"] ? S["state"][K] : K extends Function ? ReturnType<K> : never;
} & S["methods"];
