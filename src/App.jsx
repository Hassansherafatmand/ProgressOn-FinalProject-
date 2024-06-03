// src/App.jsx

import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import Projects from "./components/pages/Projects";
import Create from "./components/pages/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main_content from "./components/Main_content";

const theme = createTheme({
  palette: {
    primary: {
      main: "#08C671",
      dark: "#1E9961", // Example dark shade of primary color
    },
    secondary: {
      main: "#1E9961",
    },
    background: {
      default: "#f9f9",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Wrap the entire application with Router */}
        <Layout>
          <Routes>
            {/* Use Routes for route definitions */}
            <Route exact path="/" element={<Main_content />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
