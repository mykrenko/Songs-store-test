import { Box, IconButton, Badge } from "@mui/material";
import { styled } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

import useFavoriteSongs from "../../hooks/useFavouriteSongs";

const PreferenceСounterContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const StyledFavoriteIcon = styled(FavoriteIcon)({
  color: "#9a3bc2",
});

const PreferenceСounter = () => {
  const { favoriteSongsCount } = useFavoriteSongs();
  const navigate = useNavigate();

  const navigateToFavouritesPage = () => {
    navigate("/favourites");
  };

  return (
    <PreferenceСounterContainer>
      <IconButton
        onClick={navigateToFavouritesPage}
        aria-label={`${favoriteSongsCount} liked sounds`}
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
          <StyledFavoriteIcon />
        </Badge>
      </IconButton>
    </PreferenceСounterContainer>
  );
};

export default PreferenceСounter;
