import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import useFetch from "../useFetch";
import { useTheme } from "@mui/material/styles";

const DisplayProject = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { id } = useParams();
  console.log("Project ID from URL:", id);

  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:8000/projects");
  console.log("Fetched projects:", projects);

  // Find the project by id
  const project = projects ? projects.find((p) => p.id === id) : null;
  console.log("Found project:", project);

  return (
    <Container
      maxWidth="md"
      sx={{ padding: isSmallScreen ? "0 24px" : "40px 0" }}
    >
      {isPending && <Typography variant="h6">Loading...</Typography>}
      {error && (
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      )}
      {project ? (
        <Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
            textAlign="center"
            mb={3}
          >
            {project.title}
          </Typography>

          <Box mb={isSmallScreen ? 4 : 6}>
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            paragraph
            sx={{ marginBottom: "20px" }}
            fontSize={isSmallScreen ? "1rem" : "1.25rem"}
            textAlign="justify"
          >
            {project.details}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size={isSmallScreen ? "medium" : "large"}
            fullWidth={isSmallScreen}
          >
            Learn More
          </Button>
        </Box>
      ) : (
        <Typography variant="h6" color="textSecondary" textAlign="center">
          Project not found
        </Typography>
      )}
    </Container>
  );
};

export default DisplayProject;
