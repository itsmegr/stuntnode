import { mongoConnect } from "./DAO/DAO.mongoInit";
import ConfigureServer from "./ServerConfig/ConfigureServer";
import SinkErrorFor from "./ServerConfig/ErrorHandler";
const server = ConfigureServer();

import HandleRoutesFor from "./ServerConfig/RouteHandlers";

// Route Handling
HandleRoutesFor(server);

// Error Handling
SinkErrorFor(server);

const PORT = process.env.PORT;
mongoConnect(() => {
  server.listen(PORT, () => {
    console.log(`Node app running at ${PORT}`);
  });
});
