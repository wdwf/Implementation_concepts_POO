import { Router, Request, Response, NextFunction } from "express";
import * as postsService from "../Services/postsService";


const routes = Router();

routes.get('/posts', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const posts = await postsService.getPosts();
    res.status(200).json(posts.rows);
  } catch (error) {
    next(error)
  }
});

routes.post('/posts', async function (req: Request, res: Response, next: NextFunction) {
  const post = req.body;
  try {
    const newPost = await postsService.savePost(post);
    res.status(201).json(newPost);
  } catch (error) {
    next(error)
  }
});


routes.put('/posts/:id', async function (req: Request, res: Response, next: NextFunction) {
  const post = req.body;
  try {
    await postsService.updatePost(req.params.id, post);
    res.status(204).json({ message: "update success" });
  } catch (error) {
    next(error)
  }
});

routes.delete('/post/:id', async function (req: Request, res: Response, next: NextFunction) {
  try {
    await postsService.deletePost(req.params.id);
    res.status(204).json({ message: "delete success" });
  } catch (error) {
    next(error)
  }
});

export default routes;