import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import SongsList from "../../components/SongsList";

const StyledArtistPageContainer = styled(Box)({
  width: "100vw",
  height: "92%",
  minHeight: "92.5vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#a6b8f3",
});

const StyledArtistAvatar = styled("img")({
  width: "25%",
  marginTop: "1%",
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
  // This part (data) could be done by creating a new slice (+ custom hook) and retrieving the information from there, but since this is a test task, it was decided to go with a more simplified approach.
  const location = useLocation();
  const { avatar, name, id, songsCount } = location.state.artistInfo;

  return (
    <StyledArtistPageContainer>
      <StyledArtistAvatar src={avatar} />
      <StyledArtistName>{name}</StyledArtistName>
      <SongsList artistId={id} artistSongsCount={songsCount} isForArtistPage />
    </StyledArtistPageContainer>
  );
};

export default ArtistPage;
