import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Tab,
  Tabs,
  Box,
  useMediaQuery,
} from "@mui/material";
import ProjectCards from "../pages/ProjectCards";
import useFetch from "../useFetch";
import { useTheme } from "@mui/material/styles";

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    data: projects,
    error,
    isPending,
  } = useFetch("http://localhost:8000/projects");

  // State to manage the filter category
  const [filter, setFilter] = useState(0);

  // State to manage the projects list after fetching
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Effect to filter projects based on the selected tab
  useEffect(() => {
    if (projects) {
      if (filter === 0) {
        setFilteredProjects(projects);
      } else if (filter === 1) {
        setFilteredProjects(
          projects.filter(
            (project) => project.category.toLowerCase() === "web-design"
          )
        );
      } else if (filter === 2) {
        setFilteredProjects(
          projects.filter(
            (project) => project.category.toLowerCase() === "app-design"
          )
        );
      } else if (filter === 3) {
        setFilteredProjects(
          projects.filter(
            (project) => project.category.toLowerCase() === "graphic-design"
          )
        );
      }
    }
  }, [projects, filter]);

  const handleFilter = (event, newValue) => {
    setFilter(newValue);
  };

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/projects/" + id, {
      method: "DELETE",
    });
    setFilteredProjects(
      filteredProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <div className="projects">
      <Container>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ display: "block", marginBottom: "40px" }}
        >
          Project Lists
        </Typography>
        {/* Filter tabs */}
        <Tabs
          value={filter}
          onChange={handleFilter}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            flexWrap: isSmallScreen ? "wrap" : "nowrap",
            ".MuiTab-root": {
              fontSize: isSmallScreen ? "0.9rem" : "1.2rem", // Adjust the font size
              padding: isSmallScreen ? "8px 16px" : "12px 24px", // Adjust the padding
              minWidth: isSmallScreen ? 70 : 100, // Adjust the minimum width
            },
            ".Mui-selected": {
              fontWeight: "bold", // Make the selected tab bold
            },
          }}
        >
          <Tab wrapped label="View All" />
          <Tab label="Web" />
          <Tab label="App" />
          <Tab label="Graphic" />
        </Tabs>

        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <Container>
          <Grid container spacing={3} sx={{ marginTop: "24px" }}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <ProjectCards project={project} handleDelete={handleDelete} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Projects;
