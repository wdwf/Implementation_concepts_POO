import { Router, Request, Response } from "express";
import * as postsService from "../Services/postsService";


const routes = Router();

routes.get('/posts', async function (req: Request, res: Response) {
  // const posts = await postsService.getPosts()
  // res.status(200).json(posts)
  res.status(200).json([
    {
      id: 1,
      title: "Rest API: Métodos",
      content: '....',
      date: new Date()
    }
  ])
});
routes.get('/posts/:id');
routes.post('/posts');
routes.put('/posts/:id');
routes.delete('/posts/:id');

export default routes;