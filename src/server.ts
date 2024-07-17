import express, { Request, Response, Router } from "express";
import routes from "./Routers";
import { errorMiddleware } from "./Middlewares/error";
import SwaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));
app.use("/v1", routes);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Running server http://localhost:${PORT}`));

