import express from "express";
import axios from "axios";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";

dotenv.config(); // โหลดตัวแปรจากไฟล์ .env

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Path utilities (ใช้สำหรับ static files ถ้าต้องการ)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ดึงค่าจาก .env แทน import.meta.env
const YOUR_CLIENT_ID = process.env.VITE_APP_GOOGLE_CLIENT_ID;
const YOUR_CLIENT_SECRET = process.env.VITE_APP_GOOGLE_CLIENT_SECRET;
const YOUR_REDIRECT_URL = "http://localhost:3000/auth/google/callback";

// ✅ Step 1: redirect ไปหน้า Google OAuth consent
app.get("/auth/google", (req, res) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${YOUR_CLIENT_ID}&redirect_uri=${YOUR_REDIRECT_URL}&response_type=code&scope=profile email`;
  res.redirect(url);
});

// ✅ Step 2: รับ callback จาก Google
app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send("Missing code");

  try {
    // ขอ access token
    const { data } = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: YOUR_CLIENT_ID,
      client_secret: YOUR_CLIENT_SECRET,
      code,
      redirect_uri: YOUR_REDIRECT_URL,
      grant_type: "authorization_code",
    });

    const { access_token } = data;

    // ดึงข้อมูล user profile
    const { data: profile } = await axios.get(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    console.log("✅ Logged in user:", profile);

    // ส่งกลับไปหน้า frontend พร้อมข้อมูล user
    res.redirect(
      `http://localhost:5173/creator/create?user=${encodeURIComponent(
        JSON.stringify(profile)
      )}`
    );
  } catch (err) {
    console.error("❌ OAuth Error:", err.response?.data || err.message);
    res.redirect("http://localhost:3000/login?error=google_auth_failed");
  }
});

app.get("/", (req, res) => {
  res.send(`Server running... 🔥 ${process.env.VITE_APP_GOOGLE_CLIENT_ID}`);
});

const port = 3000;
app.listen(port, () => console.log(`✅ Server running: http://localhost:${port}`));