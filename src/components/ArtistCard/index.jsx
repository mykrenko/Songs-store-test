// import PropTypes from "prop-types";
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
});

const CardActionAreaContainer = styled(CardActionArea)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "5%",
});

const ArtistImg = styled(CardMedia, {
  shouldForwardProp: () => true,
})(() => ({
  maxHeight: "80%",
}));

const ArtistName = styled(Typography)({
  width: "100%",
  minHeight: "10%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#7481aa",
  color: "white",
  fontSize: "18px",
});

const ArtistCard = () => {
  const navigate = useNavigate();

  const navigateToArtist = () => {
    navigate("/artist");
  };

  return (
    <ArtistCardContainer>
      <CardActionAreaContainer onClick={() => navigateToArtist()}>
        <ArtistImg
          component="img"
          image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/777.jpg"
          alt={"asd"}
        />
        <CardContent>
          <ArtistName>{"Artist Name"}</ArtistName>
        </CardContent>
      </CardActionAreaContainer>
    </ArtistCardContainer>
  );
};

// ArtistCard.propTypes = {
//   title: PropTypes.string,
// };

export default ArtistCard;
