import { NextFunction, Request, Response } from "express";
import YtMusicClient from "../services/ytmusicClient";

export const initYtMusicClient = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    req.ytMusicClient = await YtMusicClient.getInstance();
    next();
  } catch (err) {
    res.status(500).json({ error: "Failed to initialize YtMusicClient" });
  }
};
