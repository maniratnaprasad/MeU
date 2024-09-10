import { Request, Response } from "express";
import YtMusicClient from "../services/ytmusicClient";
import YTMusic from "ytmusic-api";

const withYtMusicClient = (
  handler: (req: any, res: any, yt: YTMusic) => Promise<Response | void>
) => {
  return async (req: Request, res: Response) => {
    const yt = await YtMusicClient.getInstance();
    await handler(req, res, yt);
  };
};

export default withYtMusicClient;
