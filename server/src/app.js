const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
