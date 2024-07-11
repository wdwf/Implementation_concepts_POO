import { Router, Request, Response } from "express";
import * as postsService from "../Services/postsService";


const routes = Router();

routes.get('/posts', async function (req: Request, res: Response) {
  const posts = await postsService.getPosts();
  res.status(200).json(posts.rows);
});

routes.post('/posts', async function (req: Request, res: Response) {
  const post = req.body;
  const newPost = await postsService.savePost(post);
  res.json(newPost);
});

// routes.put('/posts/:id', async function (req: Request, res: Response) {
//   const post = req.body;
//   console.log(post);

//   await postsService.updatePost(req.params.id, post);
//   res.end();
// });

routes.delete('/post/:id', async function (req: Request, res: Response) {
  await postsService.deletePost(req.params.id);
  res.json({ message: "delete success" });
});

export default routes;