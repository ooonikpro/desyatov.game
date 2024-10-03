import app from "@app";
import { DBType, getDatabase } from "@plugins/database.plugin";

const createModel = <R>(procedure: (database: DBType) => R) => {
  return () => procedure(getDatabase(app));
};

export default createModel;
