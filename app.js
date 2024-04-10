const express = require("express");
const app = express();
require("dotenv").config();
require("./config/dbConfig");

const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/components", require("./routes/contentRouter"));

app.listen(port, () => console.log(`Backend Server Running On PORT ${port}`));
