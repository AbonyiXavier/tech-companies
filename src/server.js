import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index";
import pool from "./database/config";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to my API",
  });
});

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "sorry! can not be found!",
  });
});

const PORT = process.env.PORT || 4000;

pool.connect();

app.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
});

export default app;
