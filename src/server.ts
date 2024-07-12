import express, { Request, Response, Router } from "express";
import routes from "./Routers";
import { errorMiddleware } from "./Middlewares/error";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Running server http://localhost:${PORT}`));

