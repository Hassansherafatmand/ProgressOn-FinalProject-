// src/App.jsx

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./components/pages/Projects";
import Create from "./components/pages/Create";
import Main_content from "./components/Main_content";
import theme from "./Theme";
import DisplayProject from "./components/pages/DisplayPrject";
import IntroProjects from "./components/sections/IntroProjects";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Wrapped the entire application with Router */}
        <Layout>
          <Routes>
            <Route exact path="/" element={<Main_content />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/create" element={<Create />} />
            <Route path="/displayProject/:id" element={<DisplayProject />} />
            <Route path="/IntroProjects" element={<IntroProjects />} />{" "}
            {/* Add this route */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
