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
router.post("/searchSongs", searchSongs);
router.post("/sSuggestion", searchSuggestions);
router.post("/search", search);
router.post("/sArtists", searchArtists);
router.post("/sAlbums", searchAlbums);
router.post("/sPlaylists", searchPlaylists);
router.post("/lyrics", getLyrics);
router.post("/gArtist", getArtist);
router.post("/gArtistSongs", getArtistSongs);
router.post("/gArtistAlbums", getArtistAlbums);
router.post("/gAlbum", getAlbum);
router.post("/gPlaylist", getPlaylist);
router.get("/gHomeSections", getHomeSections);

export default router;
