import PropTypes from "prop-types";
import { useState } from "react";
import { styled } from "@mui/system";
import { Pagination, Stack, Box, CircularProgress } from "@mui/material";
import { useErrorBoundary } from "react-error-boundary";

import { useGetArtistSongsQuery } from "../../store/services/artistsAndSongsApi";
import SongItem from "../SongItem";
import useFavoriteSongs from "../../hooks/useFavouriteSongs";

const SongsListContainer = styled(Box)({
  minHeight: "30%",
  width: "45%",
  marginTop: "1%",
  backgroundColor: "#bcc7ea",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const LIST_LIMIT = 5;

const SongsList = ({ artistId, artistSongsCount, isForArtistPage }) => {
  const { toggleFavorite, isFavorite } = useFavoriteSongs();
  const [page, setPage] = useState(1);
  const { showBoundary } = useErrorBoundary();

  const {
    data: songs,
    error,
    isLoading,
  } = useGetArtistSongsQuery({ artistId, page, limit: LIST_LIMIT });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (isLoading) return <CircularProgress />;
  if (error) showBoundary(error);

  return (
    <SongsListContainer>
      {songs && songs.length > 0 ? (
        <>
          {songs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              isForArtistPage={isForArtistPage}
              isSongFavourite={isFavorite(song)}
              onLikeClick={() => toggleFavorite(song)}
            />
          ))}
          <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
            <Pagination
              count={Math.ceil(artistSongsCount / LIST_LIMIT)}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </>
      ) : (
        <Box>No songs found</Box>
      )}
    </SongsListContainer>
  );
};

SongsList.propTypes = {
  artistId: PropTypes.string,
  artistSongsCount: PropTypes.number,
  isForArtistPage: PropTypes.bool,
};

export default SongsList;
