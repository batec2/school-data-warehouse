import express from "express";
import { getDataFromRepository } from "../repositories/warehouse.repository.js";

const router = express.Router();

router.get("/", getDataFromRepository);

export default router;
