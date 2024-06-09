import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  AddCircleOutline,
  SubjectOutlined,
  MenuOpen as MenuOpenIcon,
  AddHomeOutlined,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import the theme object from your Them.jsx file
import theme from "../Theme";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const CustomDrawer = styled(({ miniVariant, ...other }) => (
  <Drawer {...other} />
))(({ miniVariant }) => ({
  width: miniVariant ? 64 : drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: miniVariant ? 64 : drawerWidth,
    boxSizing: "border-box",
    background: "#323232",
  },
}));

const ActiveListItem = styled(ListItem)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.action.selected,
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: theme.palette.text.dark, // Dark text color when selected
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: theme.palette.text.dark, // Dark text color on hover
    },
    "& .MuiListItemIcon-root": {
      color: theme.palette.text.dark, // Dark text color for ListItemIcon on hover
    },
  },
}));

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:640px)");
  const [miniVariant, setMiniVariant] = useState(false);

  // Automatically set miniVariant based on screen size
  useEffect(() => {
    setMiniVariant(isMobile);
  }, [isMobile]);

  const menuItems = [
    {
      text: "Home ",
      icon: <AddHomeOutlined color="primary" />,
      path: "/",
    },
    {
      text: "My Projects",
      icon: <SubjectOutlined color="primary" />,
      path: "/projects",
    },
    {
      text: "Create Project",
      icon: <AddCircleOutline color="primary" />,
      path: "/create",
    },
  ];

  const toggleMiniVariant = () => {
    setMiniVariant(!miniVariant);
  };

  return (
    <Box
      sx={{
        display: "flex",
        background: theme.palette.background.default,
      }}
    >
      <CustomDrawer variant="permanent" anchor="left" miniVariant={miniVariant}>
        <DrawerHeader>
          <MenuOpenIcon
            color="secondary"
            onClick={toggleMiniVariant}
            sx={{ cursor: "pointer" }}
          />
        </DrawerHeader>
        <Container>
          <Typography variant="h4">Logo</Typography>
        </Container>
        <List>
          {menuItems.map((item) => (
            <ActiveListItem
              button
              key={item.text}
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ActiveListItem>
          ))}
        </List>
      </CustomDrawer>
      {children}
    </Box>
  );
};

export default Layout;

/**
 * Make it professional responsive best approchae and best standard.
 *
 */
