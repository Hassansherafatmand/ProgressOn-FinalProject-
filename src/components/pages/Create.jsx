import { Container, Typography, Button, TextField } from "@mui/material";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { useState } from "react";
import InputFileUpload from "../InputFileUpload";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("front-end");
  const [imageUrl, setImageUrl] = useState("");

  //Get the Current date

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  //Error handling
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //rest the error values
    setTitleError(false);
    setDetailsError(false);
    setImageError(false);

    // check for errror
    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setDetailsError(true);
    }
    if (imageUrl == "") {
      setImageError(true);
    }

    if (title && details) {
      console.log(title, details, category, imageUrl);
      // send post request to add data to db.json every time that we submit the form
      fetch("http://localhost:8000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          details,
          category,
          currentDate,
          imageUrl,
        }),
      }).then(() => navigate("/"));
    }
  };
  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
        sx={{ margin: "32px 0 0 0" }}
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
          margin="normal"
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          error={detailsError}
        ></TextField>
        <FormControl sx={{ margin: "16px" }}>
          <FormLabel sx={{ marginBottom: "16px" }}>Upload Photo</FormLabel>
          <InputFileUpload />
        </FormControl>

        {/************************* radio buttons ************************/}
        <TextField
          onChange={(e) => setImageUrl(e.target.value)} // Handle image URL input
          label="Image URL" // Label for image URL input field
          variant="outlined"
          color="primary"
          fullWidth
          margin="normal"
          error={imageError}
        />
        <Container>
          <FormControl sx={{ margin: "16px" }}>
            <FormLabel>Work Experiences</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="web-design"
                control={<Radio />}
                label="Web Design"
              />
              <FormControlLabel
                value="app-design"
                control={<Radio />}
                label="App Design"
              />
              <FormControlLabel
                value="graphic-design"
                control={<Radio />}
                label="Graphic Design"
              />
            </RadioGroup>
          </FormControl>
        </Container>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
