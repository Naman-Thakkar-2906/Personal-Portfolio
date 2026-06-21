import express from "express";
import { userModel } from "./db.js";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 Hour
  max: 3, // Only 3 res per ip
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages submitted. Please try again after some time.",
  },
});

app.post("/submit", contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await userModel.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
