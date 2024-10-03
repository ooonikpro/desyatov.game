import { ServerModuleType } from "@types";

const createModule = <F>(fn: ServerModuleType<F>) => fn;

export default createModule;
