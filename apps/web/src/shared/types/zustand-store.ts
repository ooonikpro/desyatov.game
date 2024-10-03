import { Draft } from "immer";

// eslint-disable-next-line
export type ZStoreStateType = Record<string, any>;
export type ZStoreMethodsType = Record<string, () => void>;

export type ZStoreType<
  S extends ZStoreStateType,
  M extends ZStoreMethodsType,
> = {
  state: S;
  methods: M;
};

export type ZStoreGetterType<
  S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>,
> = () => S["state"];

export type ZStoreProducerType<
  S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>,
> = (draftState: Draft<S>["state"]) => void;

export type ZStoreSetterType<
  S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>,
> = (produce: ZStoreProducerType<S>) => void;

export type ZStoreInitFunctionType<
  S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>,
> = (
  set: ZStoreSetterType<S>,

  get: ZStoreGetterType<S>,
) => S;

export type ZustandModelType<
  S extends ZStoreType<ZStoreStateType, ZStoreMethodsType>,
> = {
  // Get once

  get: <K extends keyof S["state"]>(key: K) => S["state"][K];
  // Sync with store and get value
  use: <K extends keyof S["state"] | (<T>() => T)>(
    keyOrSelector: K,
  ) => K extends keyof S["state"]
    ? S["state"][K]
    : K extends <T>() => T
      ? ReturnType<K>
      : never;
} & S["methods"];
