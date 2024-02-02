import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import PreferenceСounter from "../PreferenceСounter";
import BackButton from "../BackButton";
import HeaderTitle from "../HeaderTitle";
import { useLocation } from "react-router-dom";

const StyledHeader = styled("header")({
  width: "90vw",
  height: "7.5vh",
  padding: "0 5vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#8674aa",
});

const StyledRightHeaderInfo = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  minWidth: "10vw",
});

const Header = ({ title = "Title" }) => {
  const mainPageLocation = "/";
  const location = useLocation();

  const isUserOnMainPage = location.pathname === mainPageLocation;

  return (
    <StyledHeader>
      <StyledRightHeaderInfo>
        {!isUserOnMainPage && <BackButton />}
        <HeaderTitle title={title} />
      </StyledRightHeaderInfo>
      <PreferenceСounter />
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
