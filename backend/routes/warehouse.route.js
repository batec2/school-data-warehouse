import express from "express";
import { getData, insertFile } from "../controllers/warehouse.controller.js";
import multer from "multer";

const upload = multer({ dest: "uploads" });
const router = express.Router();

router.get("/", getData);
router.post("/", upload.single("file"), insertFile);

export default router;
