import PropTypes from "prop-types";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const PreferenceСounterContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const StyledFavoriteIcon = styled(FavoriteIcon)({
  color: "#9a3bc2",
});

const PreferenceСounter = ({ count = 0 }) => {
  const navigate = useNavigate();

  const navigateToFavouritesPage = () => {
    navigate("/favourites");
  };

  return (
    <PreferenceСounterContainer>
      <IconButton
        onClick={navigateToFavouritesPage}
        aria-label={`${count} liked sounds`}
      >
        <Badge
          badgeContent={count}
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

PreferenceСounter.propTypes = {
  count: PropTypes.number,
};

export default PreferenceСounter;
