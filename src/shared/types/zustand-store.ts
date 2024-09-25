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
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/ban-types
  use: <K extends keyof S["state"] | (() => any)>(
    // eslint-disable-next-line no-unused-vars
    keyOrSelector: K,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/ban-types
  ) => K extends keyof S["state"] ? S["state"][K] : K extends Function ? ReturnType<K> : never;
} & S["methods"];
