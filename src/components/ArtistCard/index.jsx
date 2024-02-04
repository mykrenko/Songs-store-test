import PropTypes from "prop-types";
import { styled } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ArtistCardContainer = styled(Card)({
  width: "20vw",
  minWidth: "35vh",
  height: "45vh",
  minHeight: "45%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#7481aa",
  margin: "5%",
  boxShadow: "rgba(0, 0, 0, 0.24) 17px 17px 12px",
  color: "rgb(217 0 254 / 100%)",
});

const CardActionAreaContainer = styled(CardActionArea)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "5%",
});

const ArtistImg = styled(CardMedia)({
  maxHeight: "80%",
});

const ArtistName = styled(Typography)({
  width: "100%",
  minHeight: "10%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#7481aa",
  color: "white",
  fontSize: "18px",
});

const ArtistCard = ({ avatar, name, id, songsCount }) => {
  const navigate = useNavigate();

  const navigateToArtist = () => {
    navigate(`/artist/${id}`, {
      state: { artistInfo: { avatar, name, id, songsCount } },
    });
  };

  return (
    <ArtistCardContainer>
      <CardActionAreaContainer onClick={navigateToArtist}>
        <ArtistImg component="img" image={avatar} alt={`${name} avatar`} />
        <CardContent>
          <ArtistName>{name}</ArtistName>
        </CardContent>
      </CardActionAreaContainer>
    </ArtistCardContainer>
  );
};

ArtistCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  songsCount: PropTypes.number,
};

export default ArtistCard;
