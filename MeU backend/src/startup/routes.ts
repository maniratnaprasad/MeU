import express, { Application } from "express";
import cors from "cors";
import youtubeRouter from "../routes/youtube.route";

module.exports = function (app: Application) {
  app.use(express.json());
  app.use(cors());

  app.use("/", youtubeRouter);
};
