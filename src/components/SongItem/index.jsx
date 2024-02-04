import PropTypes from "prop-types";
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

const SongDetailTypography = styled(Typography)({
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
            isSongFavourite
              ? "Remove song from favourites"
              : "Add song to favourites"
          }`}
        >
          {isSongFavourite ? <StyledFavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Avatar src={cover} alt={artistName} variant="rounded" />
        <>
          {!isForArtistPage && <Typography>{artistName}</Typography>}
          <Typography>{name}</Typography>
        </>
      </SongInfoContainer>
      <SongDetailTypography>{duration}</SongDetailTypography>
    </SongItemContainer>
  );
};

SongItem.propTypes = {
  isSongFavourite: PropTypes.bool,
  song: PropTypes.shape({
    cover: PropTypes.string,
    artistName: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.string,
  }),
  isForArtistPage: PropTypes.bool,
  onLikeClick: PropTypes.func,
};

export default SongItem;
