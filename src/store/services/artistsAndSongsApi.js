import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const artistsAndSongsApi = createApi({
  reducerPath: "artistsAndSongsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://640799f62f01352a8a7faa72.mockapi.io/api/",
  }),
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: () => `artists`,
    }),
    getAllArtistSongs: builder.query({
      query: (id) => `artists/${id}/songs`,
    }),
    getArtistSongs: builder.query({
      query: ({ artistId, page, limit }) =>
        `artists/${artistId}/songs?page=${page}&limit=${limit}`,
    }),
    getSong: builder.query({
      query: ({ artistId, songId }) => `artists/${artistId}/songs/${songId}`,
    }),
  }),
});

export const {
  useGetArtistsQuery,
  useGetAllArtistSongsQuery,
  useGetArtistSongsQuery,
  useGetSongQuery,
} = artistsAndSongsApi;
