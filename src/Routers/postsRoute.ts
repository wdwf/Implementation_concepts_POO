import { Router } from "express";


const routes = Router();

routes.get('/posts');
routes.get('/posts/:id');
routes.post('/posts');
routes.put('/posts/:id');
routes.delete('/posts/:id');

export default routes;