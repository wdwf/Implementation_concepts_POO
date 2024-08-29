import express, { Request, Response, Router } from "express";
import SwaggerUi from "swagger-ui-express";
import { errorMiddleware } from "./Infra/middlewares/error";
import routes from "./Routers";
import swaggerDocs from "./swagger.json";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));
app.use("/v1", routes);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Running server http://localhost:${PORT}`));
