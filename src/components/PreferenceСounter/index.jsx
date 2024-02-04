import { Box, IconButton, Badge } from "@mui/material";
import { styled } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

import useFavoriteSongs from "../../hooks/useFavouriteSongs";

const FavoritesIconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const ColoredFavoriteIcon = styled(FavoriteIcon)({
  color: "#9a3bc2",
});

const PreferenceСounter = () => {
  const { favoriteSongsCount } = useFavoriteSongs();
  const navigate = useNavigate();

  const navigateToFavouritesPage = () => {
    navigate("/favourites");
  };

  return (
    <FavoritesIconContainer>
      <IconButton
        onClick={navigateToFavouritesPage}
        aria-label={`Navigate to favourite songs page. ${favoriteSongsCount} liked sounds`}
      >
        <Badge
          badgeContent={favoriteSongsCount}
          color="primary"
          showZero
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <ColoredFavoriteIcon />
        </Badge>
      </IconButton>
    </FavoritesIconContainer>
  );
};

export default PreferenceСounter;
