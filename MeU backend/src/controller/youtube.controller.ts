import { Response } from "express";
import withYtMusicClient from "../middleware/withYtMusicClient";
import YTMusic from "ytmusic-api";

//example of using middleware to remove over writing of
// const Yt = await YtMusicClient.getInstance();
export const searchSongs = async (req: any, res: Response) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.searchSongs(query);
  return res.json(result);
};

//example of using helper function to remove over writing of
// const Yt = await YtMusicClient.getInstance();
export const searchSuggestions = withYtMusicClient(
  async (req: any, res: any, yt: YTMusic) => {
    const { query } = req.body;
    const result = await yt.getSearchSuggestions(query);
    return res.json(result);
  }
);

export const search = async (req: any, res: any) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.search(query);
  return res.json(result);
};

export const searchArtists = async (req: any, res: Response) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.searchArtists(query);
  return res.json(result);
};

export const searchAlbums = async (req: any, res: any) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.searchAlbums(query);
  return res.json(result);
};

export const searchPlaylists = withYtMusicClient(
  async (req: any, res: any, yt: YTMusic) => {
    const { query } = req.body;
    const result = await yt.searchPlaylists(query);
    return res.json(result);
  }
);

export const getLyrics = async (req: any, res: any) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.getLyrics(query);
  return res.json(result);
};

export const getArtist = async (req: any, res: any) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.getArtist(query);
  return res.json(result);
};

export const getArtistSongs = async (req: any, res: any) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.getArtistSongs(query);
  return res.json(result);
};

export const getArtistAlbums = async (req: any, res: any) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.getArtistAlbums(query);
  return res.json(result);
};

export const getAlbum = async (req: any, res: any) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.getAlbum(query);
  return res.json(result);
};

export const getPlaylist = async (req: any, res: any) => {
  const { query } = req.body;
  const result = await req.ytMusicClient.getPlaylist(query);
  return res.json(result);
};

export const getHomeSections = async (req: any, res: any) => {
  const result = await req.ytMusicClient.getHomeSections();
  return res.json(result);
};
