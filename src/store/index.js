import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { artistsAndSongsApi } from "./services/artistsAndSongsApi";
import favoriteSongsSlice from "./slices/favoriteSongsSlice";

export const store = configureStore({
  reducer: {
    favoriteSongsSlice,
    [artistsAndSongsApi.reducerPath]: artistsAndSongsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artistsAndSongsApi.middleware),
});

setupListeners(store.dispatch);
