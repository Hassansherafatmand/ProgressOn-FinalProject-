import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const ProjectCards = ({ project, handleDelete }) => {
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(project.id)}>
              <DeleteOutline color="primary" />
            </IconButton>
          }
          title={project.title}
          subheader={project.category}
        />
        <CardContent>
          <Typography variant="body2" color={"textSecondary"}>
            {project.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCards;
