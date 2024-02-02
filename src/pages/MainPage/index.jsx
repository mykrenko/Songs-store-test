import { styled } from "@mui/system";
import { Box } from "@mui/material";

import ArtistCard from "../../components/ArtistCard";

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
  return (
    <StyledMainPageContainer>
      {[{ name: "Luke" }, { name: "Saree" }].map((name) => (
        <ArtistCard key={name} />
      ))}
    </StyledMainPageContainer>
  );
};

export default MainPage;
