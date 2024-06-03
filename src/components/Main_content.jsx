import { Container, Box } from "@mui/material";
import SectionHero from "./sections/SectionHero";

const Main_content = () => {
  return (
    <div className="main-content">
      <h1>Main content</h1>
      <div style={{ border: "1px solid red" }}>Div container</div>
      <Container fixed>
        <SectionHero />
      </Container>
    </div>
  );
};

export default Main_content;
