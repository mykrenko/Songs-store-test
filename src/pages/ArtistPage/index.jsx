import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import SongItem from "../../components/SongItem";

const StyledArtistPageContainer = styled(Box)({
  width: "100vw",
  height: "100%",
  minHeight: "92.5vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#a6b8f3",
});

const StyledArtistAvatar = styled("img")({
  width: "25%",
  marginTop: "5%",
});

const StyledArtistName = styled(Typography)({
  height: "10%",
  minWidth: "25%",
  backgroundColor: "#7481aa",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "24px",
});

const ArtistPage = () => {
  return (
    <StyledArtistPageContainer>
      <StyledArtistAvatar
        src={
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/777.jpg"
        }
      />
      <StyledArtistName>{"Artist Name"}</StyledArtistName>
      <SongItem />
    </StyledArtistPageContainer>
  );
};

export default ArtistPage;
