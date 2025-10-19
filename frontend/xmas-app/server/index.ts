import express from "express";
import axios from "axios";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Allow frontend

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const YOUR_CLIENT_ID =
  "658351038879-079hr4ah2i2f1t869ce69ohusfg5drdj.apps.googleusercontent.com";
const YOUR_CLIENT_SECRET = "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";
const YOUR_REDIRECT_URL = "http://localhost:3000/auth/google/callback";

// ✅ Step 1: Redirect user to Google's OAuth consent screen
app.get("/auth/google", (req, res) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${YOUR_CLIENT_ID}&redirect_uri=${YOUR_REDIRECT_URL}&response_type=code&scope=profile email`;
  res.redirect(url);
});

// ✅ Step 2: Handle Google's redirect back to your server
app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send("Missing code");

  try {
    const { data } = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: YOUR_CLIENT_ID,
      client_secret: YOUR_CLIENT_SECRET,
      code,
      redirect_uri: YOUR_REDIRECT_URL,
      grant_type: "authorization_code",
    });

    const { access_token } = data;
    const { data: profile } = await axios.get(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    console.log("✅ Logged in user:", profile);

    // ✅ Redirect to React app
    res.redirect(
      `http://localhost:5173/creator/create?user=${encodeURIComponent(
        JSON.stringify(profile)
      )}`
    );
  } catch (err) {
    console.error("❌ OAuth Error:", err);
    res.redirect("http://localhost:5173/login?error=google_auth_failed");
  }
});


// ✅ Health check
app.get("/", (req, res) => {
  res.send("Server running... 🔥");
});

const port = 3000;
app.listen(port, () => console.log(`✅ http://localhost:${port}`));
