import { Router } from "express";
import postRoute from "./postsRoute";

const routes = Router();

routes.use(postRoute);

export default routes;