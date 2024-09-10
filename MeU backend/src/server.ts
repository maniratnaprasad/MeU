import express from "express";
import dotenv from "dotenv";
import YTMusicClient from "./services/ytmusicClient";

dotenv.config();
const app = express();
require("./startup/routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
