import { useState } from "react";
import { styled } from "@mui/system";
import { useGetArtistSongsQuery } from "../../store/services/artistsAndSongsApi";
import SongItem from "../SongItem";
import { Pagination, Stack, Box, CircularProgress } from "@mui/material";
import useFavoriteSongs from "../../hooks/useFavouriteSongs";
import { useErrorBoundary } from "react-error-boundary";

const StyledSongsListContainer = styled(Box)({
  minHeight: "30%",
  width: "45%",
  marginTop: "1%",
  backgroundColor: "#bcc7ea",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledSongsList = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const SongsList = ({ artistId, artistSongsCount, isForArtistPage }) => {
  const { toggleFavorite, isFavorite } = useFavoriteSongs();
  const [page, setPage] = useState(1);
  const limit = 5;
  const { showBoundary } = useErrorBoundary();

  const {
    data: songs,
    error,
    isLoading,
  } = useGetArtistSongsQuery({ artistId, page, limit });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (isLoading) return <CircularProgress />;
  if (error) showBoundary(error);

  return (
    <StyledSongsListContainer>
      {songs && songs.length > 0 ? (
        <StyledSongsList>
          {songs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              isForArtistPage={isForArtistPage}
              isSongFavourite={isFavorite(song)}
              onLikeClick={() => toggleFavorite(song)}
            />
          ))}
          <Stack spacing={2} alignItems="center" marginTop={2}>
            <Pagination
              count={artistSongsCount / limit}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </StyledSongsList>
      ) : (
        <Box>No songs found</Box>
      )}
    </StyledSongsListContainer>
  );
};

export default SongsList;
