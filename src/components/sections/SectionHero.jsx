import { Stack, Avatar, Container, Typography, Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";

// Icons********************
import {
  TwitterIcon,
  YouTubeIcon,
  GitHubIcon,
  PinterestIcon,
} from "@mui/icons-material/Twitter";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
//Styles
import { styled } from "@mui/system";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import { purple, pink, red } from "@mui/material/colors";
import { Style } from "@mui/icons-material";
// ****************|Styles|**********************
const useStyles = styled({
  btn: {
    fontSize: 60,
    backgroundColor: "red",
  },
  title: {
    textDecoration: "underline",
  },
});

// ****************|Start SectionHero|**********************
const SectionHero = () => {
  const classes = useStyles();
  return (
    <div className="section-hero">
      <Container>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 200, height: 200 }}
            alt="Hassan Sherafatmand"
            src="src/components/images/hassan.jpg"
          />
        </Stack>
      </Container>
      <Container>
        <Typography
          className={classes.tit}
          variant="h4"
          component="h1"
          gutterBottom
          color="textSecondary"
        >
          Hassan Sherafatmand
        </Typography>
      </Container>
      {/* Icons */}
      <Container sx={{ marginBottom: "25px" }}>
        <ButtonGroup></ButtonGroup>
      </Container>

      <Container>
        <Button
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Contact Me
        </Button>
      </Container>
    </div>
  );
};

export default SectionHero;
