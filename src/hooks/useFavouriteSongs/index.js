import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addFavoriteSong,
  removeFavoriteSong,
  selectFavoriteSongs,
} from "../../store/slices/favoriteSongsSlice";
import { isSongAlreadyExists } from "../../utils/songsChecking";

const useFavoriteSongs = () => {
  const dispatch = useDispatch();
  const favoriteSongs = useSelector(selectFavoriteSongs);
  const favoriteSongsCount = favoriteSongs.length;

  const isFavorite = useCallback(
    (song) => isSongAlreadyExists(favoriteSongs, song),
    [favoriteSongs]
  );

  const toggleFavorite = useCallback(
    (song) => {
      const { id, name } = song;

      if (isFavorite(song)) {
        dispatch(removeFavoriteSong({ songId: id, songName: name }));
      } else {
        dispatch(addFavoriteSong(song));
      }
    },
    [dispatch, isFavorite]
  );

  return { toggleFavorite, isFavorite, favoriteSongs, favoriteSongsCount };
};

export default useFavoriteSongs;
