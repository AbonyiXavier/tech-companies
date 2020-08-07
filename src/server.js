import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
});

export default app;