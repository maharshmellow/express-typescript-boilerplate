import express from "express";
import Ping from "./ping";

const router = express.Router();

router.get("/ping", Ping.get);
router.get("/ping/:id", Ping.get);
router.post("/ping/:id", Ping.post);

export default router;
