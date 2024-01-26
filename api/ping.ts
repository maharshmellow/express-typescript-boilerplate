import { Request, Response } from "express";
import axios from "axios";

const Ping = {
  get: async (req: Request, res: Response) => {
    if (req.params.id) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
      );
      res.json(response.data);
    } else {
      res.send("GET - pong");
    }
  },

  post: (req: Request, res: Response) => {
    res.send(`POST - pong ${req.params.id}`);
  },
};

export default Ping;
