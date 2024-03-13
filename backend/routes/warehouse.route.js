import express from "express";
import { getData, insertFile } from "../controllers/warehouse.controller.js";
import multer from "multer";
import getDate from "../utils/getDate.js";

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    const fileName = file.fieldname + "-" + Date.now() + ".xml";
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });
const router = express.Router();

router.get("/", getData);
router.post("/", upload.single("file"), insertFile);

export default router;
