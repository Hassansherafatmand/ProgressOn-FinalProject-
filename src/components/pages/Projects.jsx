import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  const projectInfo = {
    webDesign: {
      category: "Web Design",
      body: "Explore my projects in web design where I focus on creating beautiful, responsive, and user-friendly websites.",
    },
    appDesign: {
      category: "App Design",
      body: "Dive into my app design projects, showcasing my ability to develop intuitive and engaging mobile applications.",
    },
    graphicDesign: {
      category: "Graphic Design",
      body: "Check out my graphic design work, where creativity meets functionality to deliver impactful visual solutions.",
    },
  };

  const {
    data: projects,
    error,
    isPending,
  } = useFetch("http://localhost:8000/projects");
  const [localProjects, setLocalProjects] = useState([]);

  useEffect(() => {
    if (projects) {
      setLocalProjects(projects);
    }
  }, [projects]);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/projects/" + id, { method: "DELETE" });
    const newProjects = localProjects.filter((project) => project.id !== id);
    setLocalProjects(newProjects);
  };

  const renderProjectsByCategory = (category) => {
    return localProjects
      .filter((project) => project.category === category)
      .map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <ProjectCards project={project} handleDelete={handleDelete} />
        </Grid>
      ));
  };

  return (
    <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ marginBottom: "20px" }}
        fontWeight="bold"
      >
        My Projects
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "40px" }}>
        Welcome to my project portfolio. Here you'll find a selection of my
        recent work in Web Design, App Design, and Graphic Design. Each project
        highlights my skills in creating user-centric designs and delivering
        high-quality solutions.
      </Typography>

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {/* Web Design Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography variant="h5" component="h2" sx={{ marginBottom: "20px" }}>
          {projectInfo.webDesign.category}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          {projectInfo.webDesign.body}
        </Typography>
        <Grid container spacing={3}>
          {renderProjectsByCategory("web-design")}
        </Grid>
      </Box>

      {/* App Design Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography variant="h5" component="h2" sx={{ marginBottom: "20px" }}>
          {projectInfo.appDesign.category}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          {projectInfo.appDesign.body}
        </Typography>
        <Grid container spacing={3}>
          {renderProjectsByCategory("app-design")}
        </Grid>
      </Box>

      {/* Graphic Design Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography variant="h5" component="h2" sx={{ marginBottom: "20px" }}>
          {projectInfo.graphicDesign.category}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          {projectInfo.graphicDesign.body}
        </Typography>
        <Grid container spacing={3}>
          {renderProjectsByCategory("graphic-design")}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
