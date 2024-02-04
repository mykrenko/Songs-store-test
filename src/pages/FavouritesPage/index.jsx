import { styled } from "@mui/system";
import { Box } from "@mui/material";
import useFavoriteSongs from "../../hooks/useFavouriteSongs";
import SongItem from "../../components/SongItem";

const StyledFavouritesPageContainer = styled(Box)({
  width: "100vw",
  height: "100%",
  minHeight: "92.5vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#a6b8f3",
});

const StyledFavouritesSongsList = styled(Box)({
  width: "60vw",
  height: "fit-content",
  marginTop: "1%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#a6b8f3",
});

const FavouritesPage = () => {
  const { toggleFavorite, isFavorite, favoriteSongs } = useFavoriteSongs();

  return (
    <StyledFavouritesPageContainer>
      <StyledFavouritesSongsList>
        {favoriteSongs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            isForArtistPage={false}
            isSongFavourite={isFavorite(song)}
            onLikeClick={() => toggleFavorite(song)}
          />
        ))}
      </StyledFavouritesSongsList>
    </StyledFavouritesPageContainer>
  );
};

export default FavouritesPage;
