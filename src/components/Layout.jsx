import { Box, Container, Drawer, Typography } from "@mui/material";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";

const Layout = ({ children }) => {
  //Defining the links
  const menuItems = [
    {
      text: "My Projects",
      icon: <SubjectOutlined color="secondary" />,
      path: "/projects",
    },
    {
      text: "Create Project",
      icon: <AddCircleOutline color="secondary" />,
      path: "/creats",
    },
  ];

  //Toggle
  const [miniVariant, setMiniVariant] = useState(false);
  const toggleMiniVariant = () => {
    setMiniVariant(!miniVariant);
  };
  return (
    <Box sx={{ display: "flex", background: "#f9f9f9" }}>
      {/* appbar */}

      {/* side drwaer */}
      <Drawer
        sx={{
          width: miniVariant ? 64 : 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: miniVariant ? 64 : 240,
            boxSizing: "border-box",
            background: "#f0f0f0",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Container>
          <Typography variant="h4">Navigation</Typography>
        </Container>

        {/* List Items */}
        <List>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              transformOrigin: "top right",
              transform: "scale(1.5)",
            }}
            onClick={toggleMiniVariant}
          >
            <MenuOpenIcon
              color="secondary"
              primary={miniVariant ? "Open" : "Close"}
            />
          </ListItemIcon>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={(e) => console.log("youclicked me")}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}> </ListItemText>
            </ListItem>
          ))}
        </List>
        <List></List>
      </Drawer>
      {/* <Box sx={{ width: "100%" }}>{children}</Box> */}
      <Container style={{ backgroundColor: "#f9f9f9", width: "100%" }}>
        {children}
      </Container>
      {/* <div style={{ backgroundColor: "#f9f9f9", width: "100%" }}>
        {children}
      </div> */}
    </Box>
  );
};

export default Layout;
