import { styled } from "@mui/system";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// const StyledArtistsPageContainer = styled(Box)({
//   width: "100vw",
//   height: "100%",
//   minHeight: "92.5vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   backgroundColor: "#a6b8f3",
// });

const SongItemContainer = styled(Box)({
  minWidth: "40%",
  height: "5%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#cda5f3",
});

const SongInfoContainer = styled(Box)({
  minWidth: "50%",
  gap: "5%",
  display: "flex",
  alignItems: "center",
});

const StyledFavoriteIcon = styled(FavoriteIcon)({
  color: "#9a3bc2",
});

const SongItem = ({ alreadyAdded = false }) => {
  return (
    <SongItemContainer>
      <SongInfoContainer>
        <IconButton
          onClick={() => console.log("ClEck")}
          aria-label={`${
            alreadyAdded ? "song added" : "add song to favourites"
          }`}
        >
          {alreadyAdded ? <StyledFavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Avatar variant="rounded"></Avatar>
        <Box>
          <Typography>{"Artist name"}</Typography>
          <Typography>{"Song name"}</Typography>
        </Box>
      </SongInfoContainer>
      <Typography>{"03:25"}</Typography>
    </SongItemContainer>
  );
};

export default SongItem;
