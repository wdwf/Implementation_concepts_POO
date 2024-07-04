import { NextFunction, Request, Response } from "express";

export default class BookController {
    private res: Response;
    private req: Request;
    private next: NextFunction;

    constructor(req: Request, res: Response, next: NextFunction) {
        this.res = res;
        this.req = req;
        this.next = next;
    }

    public getTestBook = async () => {
        const bookTest = {
            title: "Designer patterns",
            pages: 300,
            code: "T001"
        }

        return this.res.status(201).json(bookTest);
    }
}