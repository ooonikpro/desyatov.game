import { applicationOrigin } from "@configs";
import cors from "@fastify/cors";
import createModule from "@utils/createModule";

const corsPlugin = createModule((server) => {
  server.register(cors, {
    origin: applicationOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  });
});

export default corsPlugin;
