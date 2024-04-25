import express, { Request, Response } from "express";
import api from "./api";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!");
});

app.use("/api", api);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
