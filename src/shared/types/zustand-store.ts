import { Draft } from "immer";

export type ZStoreState = Record<string, any>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type ZStoreMethods = Record<string, Function>;

export type ZStore<S extends ZStoreState, M extends ZStoreMethods> = {
  state: S;
  methods: M;
};

export type ZStoreGetter<S extends ZStore<ZStoreState, ZStoreMethods>> = () => S["state"];

// eslint-disable-next-line no-unused-vars
export type ZStoreProducer<S extends ZStore<ZStoreState, ZStoreMethods>> = (draftState: Draft<S>["state"]) => void;

// eslint-disable-next-line no-unused-vars
export type ZStoreSetter<S extends ZStore<ZStoreState, ZStoreMethods>> = (produce: ZStoreProducer<S>) => void;

export type ZStoreInitFunction<S extends ZStore<ZStoreState, ZStoreMethods>> = (
  // eslint-disable-next-line no-unused-vars
  set: ZStoreSetter<S>,
  // eslint-disable-next-line no-unused-vars
  get: ZStoreGetter<S>,
) => S;

export type ZustandModel<S extends ZStore<ZStoreState, ZStoreMethods>> = {
  // Get once
  // eslint-disable-next-line no-unused-vars
  get: <K extends keyof S["state"]>(key: K) => S["state"][K];
  // Sync with store and get value
  // eslint-disable-next-line no-unused-vars
  use: <K extends keyof S["state"]>(key: K) => S["state"][K];
} & S["methods"];
