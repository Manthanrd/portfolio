import express from "express";
import {
  sendMessage,
  getMessages,
  getMessage,
  deleteMessage,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", sendMessage);

router.get("/", getMessages);

router.get("/:id", getMessage);

router.delete("/:id", deleteMessage);

export default router;