import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledTitle = styled(Typography)({
  fontSize: "32px",
  fontWeight: "bold",
  color: "white",
});

const HeaderTitle = ({ title = "Title" }) => {
  return (
    <Box>
      <StyledTitle>{title}</StyledTitle>
    </Box>
  );
};

HeaderTitle.propTypes = {
  title: PropTypes.string,
};

export default HeaderTitle;
