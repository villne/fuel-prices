import express from "express";

import { getPrices, createPrice } from "../controllers/prices.js";

const router = express.Router();

router.get("/", getPrices);
router.post("/", createPrice);

export default router;
