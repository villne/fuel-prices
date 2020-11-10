import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import priceRoutes from "./routes/prices.js";

const app = express();
dotenv.config({ path: "./.env.local" });

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/prices", priceRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
