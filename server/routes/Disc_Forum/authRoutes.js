const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const User = require("../../models/Disc_Forum/User"); 
const BuySellUser = require("../../models/Buy_Sell/userModel");
const verifyCollegeUser = require("../../middlewares/authMiddleware");

router.post("/login", verifyCollegeUser, async (req, res) => {
  try {
    const idToken = req.headers.authorization?.split(" ")[1];
    if (!idToken) return res.status(401).json({ message: "Missing token" });

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, name, email, picture } = decodedToken;

    // ✅ Step 1: Find or create Disc_Forum user
    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        displayName: name,
        email: email,
        photoURL: picture,
      });
    }

    // ✅ Step 2: Find or create Buy_Sell user
    let buySellUser = await BuySellUser.findOne({ email });

    if (!buySellUser) {
      buySellUser = await BuySellUser.create({
        name: name,
        email: email,
      });
    }

    // ✅ Step 3: Combine response
    return res.status(200).json({
      forumUser: {
        _id: user._id,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        firebaseUid: user.firebaseUid,
      },
      buySellUser: {
        _id: buySellUser._id,
        name: buySellUser.name,
        email: buySellUser.email,
        role: buySellUser.role,
      },
    });

  } catch (err) {
    console.error("Login failed:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;