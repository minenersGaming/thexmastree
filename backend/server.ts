import express from "express";
import userRouter from "./routes/userRouter";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], // include Authorization header
}));
const PORT = 3000;

app.use('/user',userRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
