import express, { Request, Response, Router } from "express";

const PORT = 3333;
const app = express();
const route = Router();

app.use(express.json());
app.use(route)

route.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

app.listen(PORT, () => console.log(`Running server http://localhost:${PORT}`));

