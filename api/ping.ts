import { Request, Response } from "express";

const Ping = {
  get: (req: Request, res: Response) => {
    if (req.params.id) {
      res.send(`GET - pong ${req.params.id}`);
    } else {
      res.send("GET - pong");
    }
  },

  post: (req: Request, res: Response) => {
    res.send(`POST - pong ${req.params.id}`);
  },
};

export default Ping;
