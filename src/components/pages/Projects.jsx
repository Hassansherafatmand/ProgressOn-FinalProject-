import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import ProjectCards from "../ProjectCards";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/projects/" + id, {
      method: "DELETE",
    });
    const newProjetcs = projects.filter((project) => project.id != id);
    setProjects(newProjetcs);
  };
  return (
    <div className="projects">
      <Container>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
          sx={{ margin: "16px 0" }}
        >
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCards project={project} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
