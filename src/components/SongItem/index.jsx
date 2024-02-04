import { styled } from "@mui/system";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SongItemContainer = styled(Box)({
  width: "100%",
  minHeight: "10%",
  marginBottom: "1%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#cda5f3",
});

const SongInfoContainer = styled(Box)({
  minWidth: "70%",
  gap: "5%",
  display: "flex",
  alignItems: "center",
});

const StyledSongDuration = styled(Typography)({
  marginRight: "8px",
});

const StyledFavoriteIcon = styled(FavoriteIcon)({
  color: "#9a3bc2",
});

const SongItem = ({
  isSongFavourite = false,
  song,
  isForArtistPage = true,
  onLikeClick,
}) => {
  const { cover, artistName, name, duration } = song;

  return (
    <SongItemContainer>
      <SongInfoContainer>
        <IconButton
          onClick={onLikeClick}
          aria-label={`${
            isSongFavourite ? "song added" : "add song to favourites"
          }`}
        >
          {isSongFavourite ? <StyledFavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Avatar src={cover} alt={artistName} variant="rounded" />
        <Box>
          {!isForArtistPage && <Typography>{artistName}</Typography>}
          <Typography>{name}</Typography>
        </Box>
      </SongInfoContainer>
      <StyledSongDuration>{duration}</StyledSongDuration>
    </SongItemContainer>
  );
};

export default SongItem;
