import app from "@app";
import { DBType, getDatabase } from "@plugins/database.plugin";

const createModel = <DTO, Payload = AnyType>(
  procedure: (database: DBType, payload?: Payload) => DTO,
) => {
  return (payload?: Payload) => procedure(getDatabase(app), payload);
};

export default createModel;
