import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledBackIcon = styled(ArrowBackIosNewIcon)({
  color: "white",
});

const BackButton = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <IconButton onClick={navigateBack}>
      <StyledBackIcon />
    </IconButton>
  );
};

export default BackButton;
