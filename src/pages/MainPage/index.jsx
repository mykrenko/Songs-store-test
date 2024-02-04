import { styled } from "@mui/system";
import { Box, CircularProgress } from "@mui/material";
import ArtistCard from "../../components/ArtistCard";
import { useGetArtistsQuery } from "../../store/services/artistsAndSongsApi";
import { useErrorBoundary } from "react-error-boundary";

const StyledMainPageContainer = styled(Box)({
  width: "100vw",
  height: "100%",
  minHeight: "92.5vh",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  backgroundColor: "#a6b8f3",
});

const MainPage = () => {
  const { data: artists, error, isLoading } = useGetArtistsQuery();
  const { showBoundary } = useErrorBoundary();

  if (isLoading) return <CircularProgress />;
  if (error) showBoundary(error);

  return (
    <StyledMainPageContainer>
      {artists.map((artist) => (
        <ArtistCard key={artist.id} {...artist} />
      ))}
    </StyledMainPageContainer>
  );
};

export default MainPage;
