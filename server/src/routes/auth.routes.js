const express = require("express");
const {
	handleUserRegistration,
	handleUserLogin,
	handleRefreshToken,
	handleLogout,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", handleUserRegistration);
router.post("/login", handleUserLogin);
router.post("/logout", handleLogout);
router.get("/refresh", handleRefreshToken);

module.exports = router;
