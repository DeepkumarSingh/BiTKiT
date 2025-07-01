// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const admin = require("../../firebaseAdmin");
const User = require("../../models/Disc_Forum/User");
const BuySellUser = require("../../models/Buy_Sell/userModel");
const verifyCollegeUser = require("../../middlewares/authMiddleware");

router.post("/login", verifyCollegeUser, async (req, res) => {
  try {
    const idToken = req.headers.authorization?.split(" ")[1];
    if (!idToken) return res.status(401).json({ message: "Missing token" });

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, name, email, picture } = decodedToken;

    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        displayName: name,
        email: email,
        photoURL: picture,
      });
    }

    // ✅ Step 2: Save in Buy_Sell DB (optional password field can be dummy)
    let buySellUser = await BuySellUser.findOne({ email });

    if (!buySellUser) {
      buySellUser = await BuySellUser.create({
        name: name,
        email: email,
      });
    }

    return res.status(200).json({
      _id: buySellUser._id,
      name: buySellUser.name,
      email: buySellUser.email,
      role: buySellUser.role, // ✅ Add this line
    });
  } catch (err) {
    console.error("Login failed:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
