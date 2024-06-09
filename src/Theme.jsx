// src/Theme.jsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  brerakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 960,
      lg: 1200,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      main: "#F04848",
    },
    secondary: {
      main: "#FF3939",
    },
    background: {
      default: "#585858",
      paper: "#404040",
    },
    action: {
      hover: "#585858", // Set the hover color for buttons
      active: "#505050",
    },
    text: {
      primary: "#d8d8d8",
      secondary: "#CBCBCB",
      dark: "#FF4545", // Add dark text color
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    Container: {
      sx: {
        padding: "2rem", // Adjust padding value as desired
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#FF3939", // Secondary color for hover
            color: "#323232", // Dark text color on hover
          },
          color: "#ffffff", // White text for default state
        },
        containedPrimary: {
          color: "#ffffff", // White text for primary contained buttons
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#323232",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#CBCBCB",
        },
      },
    },

    // Add more component customizations as needed
  },
});

export default theme;
