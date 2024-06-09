import React, { useState } from "react";
import {
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SectionHero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedSlide, setSelectedSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const slides = [
    {
      title: "Hi, I am Hassan",
      content:
        "I'm a member of the computer club at Olympic College. My passion lies in continually learning new technologies and developing applications that are not only functional but also user-friendly. I'm always eager to collaborate and explore new ideas. Let's build something amazing together!",
      url: "src/components/images/hassan.png",
      alt: "Hassan Sherafatmand",
      buttonText: "Get Started",
    },
    {
      title: "Join Our Community",
      content:
        "Become a part of our growing community and collaborate with others who share your passion for [topic of your community]. Together, we can share ideas, learn from one another, and push the boundaries of what's possible.",
      url: "src/components/images/oc2c.svg",
      alt: "Hema",
      buttonText: "Join Us",
    },
  ];

  const handleClick = (buttonText) => {
    if (buttonText === "Get Started") {
      navigate("/IntroProjects"); // Navigate to the internal page
    } else if (buttonText === "Join Us") {
      window.open("https://discord.gg/QrsGqjve", "_blank"); // Open the Discord link
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <Box maxWidth="lg">
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              flexWrap: isSmallScreen ? "wrap" : "nowrap",
              display: selectedSlide === index ? "flex" : "none",
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: isSmallScreen ? "16px" : "32px",
              boxSizing: "border-box",
              marginBottom: "40px",
            }}
          >
            <Box
              component="img"
              src={slide.url}
              alt={slide.alt}
              sx={{
                width: isSmallScreen ? "60vw" : "40%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: isSmallScreen ? "24px" : "0",
              }}
            />
            <Box
              sx={{
                flex: 1,
                textAlign: isSmallScreen ? "center" : "left",
                padding: isSmallScreen ? "0 16px" : "0 32px",
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant={isSmallScreen ? "h4" : "h3"}
                component="h1"
                gutterBottom
                fontWeight="bold"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "justify",
                  lineHeight: "2.5rem",
                  fontSize: "1.1rem",
                }}
              >
                {slide.content}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size={isSmallScreen ? "medium" : "large"}
                fullWidth={isSmallScreen}
                onClick={() => handleClick(slide.buttonText)}
                // Call handleClick on button click
                sx={
                  {
                    // marginTop: "24px",
                    // padding: "12px 24px", // Corrected the padding attribute here
                  }
                }
              >
                {slide.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" mt={2} width="100%">
        <RadioGroup
          value={selectedSlide}
          onChange={(e) => setSelectedSlide(parseInt(e.target.value, 10))}
          row
        >
          {slides.map((_, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio color="primary" />}
              label=""
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default SectionHero;
