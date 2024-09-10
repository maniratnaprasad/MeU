import express from "express";
import {
  getAlbum,
  getArtist,
  getArtistAlbums,
  getArtistSongs,
  getHomeSections,
  getLyrics,
  getPlaylist,
  search,
  searchAlbums,
  searchArtists,
  searchPlaylists,
  searchSongs,
  searchSuggestions,
} from "../controller/youtube.controller";
import { initYtMusicClient } from "../middleware/initYtMusicClient";

const router = express.Router();

router.use(initYtMusicClient);
router.get("/searchSongs", searchSongs);
router.get("/sSuggestion", searchSuggestions);
router.get("/search", search);
router.get("/sArtists", searchArtists);
router.get("/sAlbums", searchAlbums);
router.get("/sPlaylists", searchPlaylists);
router.get("/lyrics", getLyrics);
router.get("/gArtist", getArtist);
router.get("/gArtistSongs", getArtistSongs);
router.get("/gArtistAlbums", getArtistAlbums);
router.get("/gAlbum", getAlbum);
router.get("/gPlaylist", getPlaylist);
router.get("/gHomeSections", getHomeSections);

export default router;
