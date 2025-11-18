import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import weaponRoutes from "./routes/weaponRoutes.js";

dotenv.config(); // this loads all variables from .env into process.env

const app = express();
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// routes
app.use("/", weaponRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
