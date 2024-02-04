import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import PreferenceСounter from "../PreferenceСounter";
import BackButton from "../BackButton";
import HeaderTitle from "../HeaderTitle";
import { HEADER_TITLES_MAP } from "./constants";

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

const getHeaderTitle = (pathname) =>
  HEADER_TITLES_MAP.find((entry) => entry.pattern.test(pathname))?.title ||
  "Default Title";

const Header = () => {
  const { pathname } = useLocation();
  const isUserOnMainPage = pathname === "/";
  const title = getHeaderTitle(pathname);

  useEffect(() => {
    document.title = title;
  }, [title]);

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

export default Header;
