import { createSlice } from "@reduxjs/toolkit";
import { isSongAlreadyExists } from "../../utils/songsChecking";

export const favoriteSongsSlice = createSlice({
  name: "favoriteSongs",
  initialState: {
    favoriteSongs: [],
  },
  reducers: {
    addFavoriteSong: (state, action) => {
      const song = action.payload;
      const exists = isSongAlreadyExists(state.favoriteSongs, song);
      if (!exists) {
        state.favoriteSongs.push(song); // Immer allows us to safely "mutate" the state (but it was possible to create a new one)
      }
    },
    removeFavoriteSong: (state, action) => {
      const { songId, songName } = action.payload;
      state.favoriteSongs = state.favoriteSongs.filter(
        (song) => song.id !== songId && song.name !== songName
      );
    },
  },
});

export const { addFavoriteSong, removeFavoriteSong } =
  favoriteSongsSlice.actions;

export default favoriteSongsSlice.reducer;

export const selectFavoriteSongs = (state) =>
  state.favoriteSongsSlice.favoriteSongs;
