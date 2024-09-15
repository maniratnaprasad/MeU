import express from "express";
import dotenv from "dotenv";
const cors = require("cors");
dotenv.config();
const app = express();
app.use(cors());
require("./startup/routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
