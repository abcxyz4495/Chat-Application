const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("dotenv/config");

const errorMiddleware = require("./middlewares/errorMiddleware");
const credentials = require("./middlewares/credentials");
const connectDB = require("./configs/dbConnection");
const corsOptions = require("./configs/corsOptions");

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODB_URL || "";
const DB_NAME = process.env.DB_NAME || "";
const app = express();

connectDB(URL, DB_NAME);

app.use(credentials);
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", require("./routes/auth.routes"));
app.use("/user", require("./routes/user.routes"));

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
