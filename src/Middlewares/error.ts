import { NextFunction, Request, Response } from "express";

export function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error.message === 'Post already exists') {
    return res.status(409).json({ message: error.message })
  }
  if (error.message === 'Post not found') {
    return res.status(404).json({ message: error.message })
  }
  return res.status(500).json({ message: error.message })
}