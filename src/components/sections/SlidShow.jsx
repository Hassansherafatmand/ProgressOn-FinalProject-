import React, { useRef, useState } from "react";
import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import useFetch from "../useFetch";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { keyframes } from "@mui/system";
import { useTheme } from "@mui/material/styles";
const SlideShow = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:8000/projects");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const getPrevIndex = (currentIndex, length) => {
    if (currentIndex === 0) {
      return length - 1;
    } else if (currentIndex === 1) {
      return length - 2;
    } else {
      return currentIndex - 2;
    }
  };

  const getNextIndex = (currentIndex, length) => {
    if (currentIndex === length - 1) {
      return 0;
    } else if (currentIndex === length - 2) {
      return 1;
    } else {
      return currentIndex + 2;
    }
  };

  return (
    <Box marginTop="128px">
      <Box display="flex" justifyContent="cneter" gap="1%">
        <img
          src={
            projects[getPrevIndex(currentSlideIndex, projects.length)].imageUrl
          }
          alt={projects[getPrevIndex(currentSlideIndex, projects.length)].title}
          style={{
            width: isSmallScreen ? "80%" : "64%",
            borderRadius: "24px",
          }}
        />
        <img
          src={projects[currentSlideIndex].imageUrl}
          alt={projects[currentSlideIndex].title}
          style={{ width: "64%", borderRadius: "24px" }}
        />
        <img
          src={
            projects[getNextIndex(currentSlideIndex, projects.length)].imageUrl
          }
          alt={projects[getNextIndex(currentSlideIndex, projects.length)].title}
          style={{ width: "64%", borderRadius: "24px" }}
        />
      </Box>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup sx={{ margin: "40px" }}>
          <ArrowButton
            onClick={handlePrevSlide}
            icon={<ArrowCircleLeftIcon />}
          />
          <ArrowButton
            width="3rem"
            height="3rem"
            onClick={handleNextSlide}
            icon={<ArrowCircleRightIcon />}
          />
        </ButtonGroup>
      </Container>
    </Box>
  );
};

const ArrowButton = ({ onClick, icon }) => (
  <IconButton
    onClick={onClick}
    sx={{
      border: "none",
      zIndex: 1, // Increase font size for larger icon
      "& svg": {
        color: "primary.main",
        width: "48px",
        height: "48px",
      },
      margin: "0rem", // Add margin for spacing (adjust as needed)
      "&:hover": {
        border: "none",
        backgroundColor: "transparent",
        "& svg": {
          color: "secondary.main",
          width: "48px",
          height: "48px",
        },
      },
    }}
  >
    {icon}
  </IconButton>
);

export default SlideShow;
