import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const IntroProjects = () => {
  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:8000/projects");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const findProjectByCategory = (category) => {
    return projects?.find((project) => project.category === category);
  };

  const ProjectSection = ({
    title,
    category,
    content,
    reverseOnLarge = false,
  }) => {
    const project = findProjectByCategory(category);

    const gridDirection = isMobile
      ? "column"
      : reverseOnLarge && isLargeScreen
      ? "row-reverse"
      : "row";

    return (
      <Grid container direction={gridDirection} margin="20px 0">
        <Grid item xs={12} lg={6}>
          {project && (
            <Box
              key={category}
              sx={{ padding: isLargeScreen ? "0 20px " : "0" }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                  marginBottom: isMobile ? "0 " : "64px",
                }}
                src={project.imageUrl}
                alt={project.title}
              />
            </Box>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            paddingTop: isMobile ? "20px " : "0",
            paddingBottom: isMobile ? "60px " : "0",
          }}
        >
          <Box
            sx={{
              padding: isLargeScreen ? "0 40px" : " 0 ",
            }}
          >
            <Typography variant="h4" component="h2" fontWeight="bold">
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                textAlign: "justify",
                lineHeight: "2.1rem",
                fontSize: "1.1rem",
                marginBottom: "16px",
              }}
            >
              {content}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size={isMobile ? "medium" : "large"}
              fullWidth={isMobile}
              component={Link}
              to={`/projects`}
              sx={{
                minWidth: "200px",
                padding: "12px 24px",
              }}
            >
              Start
            </Button>
          </Box>
        </Grid>
      </Grid>
    );
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="introduction to projects">
      <Container>
        <ProjectSection
          title="Web Design"
          category="web-design"
          content="As an App Designer, I craft intuitive and visually appealing user
            interfaces (UIs) for mobile applications. My focus lies in
            understanding user needs and behaviors through research and
            iteration. This user-centric approach ensures clear navigation,
            efficient workflows, and a seamless user journey, keeping users
            engaged and coming back for more."
        />
        <ProjectSection
          title="App Design"
          category="app-design"
          content="In the realm of Web Design, I prioritize user-friendly functionality
            alongside stunning aesthetics. My designs ensure websites are not
            only beautiful but also intuitive to navigate, optimized for various
            screen sizes, and adhere to search engine optimization (SEO)
            principles for better online visibility. This translates to a
            positive user experience that keeps visitors engaged and drives
            website success."
          reverseOnLarge={true}
        />
        <ProjectSection
          title="Graphic Design"
          category="graphic-design"
          content="Leveraging my skills in Graphic Design, I create impactful visual
            elements that elevate your brand identity and marketing efforts.
            From crafting a captivating logo that embodies your brand essence to
            designing engaging social media graphics that resonate with your
            target audience, I translate your brand message into visuals that
            tell a compelling story and leave a lasting impression."
        />
      </Container>
    </div>
  );
};

export default IntroProjects;
