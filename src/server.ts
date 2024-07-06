import express, { Request, Response, Router } from "express";
import routes from "./Routers";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes)

app.listen(PORT, () => console.log(`Running server http://localhost:${PORT}`));

