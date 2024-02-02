import { styled } from "@mui/system";
import { Box } from "@mui/material";

const StyledFavouritesPageContainer = styled(Box)({
  width: "100vw",
  height: "100%",
  minHeight: "92.5vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#a6b8f3",
});

const FavouritesPage = () => {
  return (
    <StyledFavouritesPageContainer>{"Favor"}</StyledFavouritesPageContainer>
  );
};

export default FavouritesPage;
