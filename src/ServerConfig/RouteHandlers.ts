import { Application } from "express";
import studentRoutes from "../Routes/Route.student";

//entry point for all the routes
function HandleRoutesFor(server: Application) {
  //routing them to their corresponding route file
  server.use("/student", studentRoutes);
}

export default HandleRoutesFor;
