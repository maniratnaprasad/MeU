import { Request } from "express";
import YtMusicClient from "../services/ytmusicClient";

declare module "express-serve-static-core" {
  interface Request {
    ytMusicClient?: YtMusicClient;
  }
}
