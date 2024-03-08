const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user.model");

const ErrorHandler = require("../utils/utilityclasses");
const TryCatch = require("../utils/features");

const handleUserRegistration = TryCatch(async (req, res, next) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password)
		return next(ErrorHandler(400, "Missing Fields"));

	const [duplicateUsername, duplicateEmail] = await Promise.all([
		User.findOne({ username }),
		User.findOne({ email }),
	]);

	if (duplicateEmail)
		return next(new ErrorHandler(409, "Email already in use"));
	if (duplicateUsername)
		return next(new ErrorHandler(409, "Username already in use"));

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		username,
		password: hashedPassword,
		email,
	});

	const accessToken = jwt.sign(
		{ id: user._id, email: user.email },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: "20s" }
	);

	const refreshToken = jwt.sign(
		{ id: user._id, email: user.email },
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: "10m" }
	);

	user.refreshToken = refreshToken;
	user.status = "Online";
	await user.save();

	res
		.cookie("jwt", refreshToken, {
			httpOnly: true,
			secure: true,
			sameSite: "none",
			maxAge: 10 * 60 * 1000,
		})
		.json({ accessToken });
});

const handleUserLogin = TryCatch(async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) return next(ErrorHandler(400, "Missing Fields"));

	const user = await User.findOne({ email });
	const check = await bcrypt.compare(password, user.password);
	if (!check) return next(new ErrorHandler(400, "Incorrect Password"));

	const accessToken = jwt.sign(
		{ id: user._id, email: user.email },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: "20s" }
	);

	const refreshToken = jwt.sign(
		{ id: user._id, email: user.email },
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: "10m" }
	);

	user.refreshToken = refreshToken;
	user.status = "Online";
	await user.save();

	res
		.cookie("jwt", refreshToken, {
			httpOnly: true,
			secure: true,
			sameSite: "none",
			maxAge: 10 * 60 * 1000,
		})
		.json({ accessToken });
});

const handleLogout = TryCatch(async (req, res, next) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.status(204);

	const refreshToken = cookies.jwt;
	const user = await User.findOne({ refreshToken });
	if (!user) {
		console.log("logout");
		return res.clearCookie("jwt", {
			httpOnly: true,
			sameSite: "none",
			secure: true,
		});
	}

	user.refreshToken = "";
	user.status = "Last seen " + Date(Date.now());
	await user.save();

	res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
	res.sendStatus(204);
});

const handleRefreshToken = TryCatch(async (req, res, next) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(401);

	const refreshToken = cookies.jwt;
	const user = await User.findOne({ refreshToken });
	if (!user) return res.sendStatus(403);

	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
		if (user.email != decoded.email || err) return res.sendStatus(403);
		const accessToken = jwt.sign(
			{ email: user.email },
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: "10m",
			}
		);
		res.json({ accessToken });
	});
});

module.exports = {
	handleLogout,
	handleRefreshToken,
	handleUserLogin,
	handleUserRegistration,
};
