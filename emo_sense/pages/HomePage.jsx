import {
  Container,
  Rating,
  FormControl,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function HomePage() {
  const [moodText, setMoodText] = useState("");
  const [moodNumber, setMoodNumber] = useState("5");

  const handleMoodTextChange = (e) => {
    setMoodText(e.target.value);
  };

  const handleMoodNumberChange = (e) => {
    setMoodNumber(e.target.value);
  };

  const handleSumbit = () => {};

  return (
    <>
      <Container align="center" sx={{ padding: "1rem" }}>
        <InputLabel id="mood-number">How are you feel today?</InputLabel>
        <Rating
          labelid="mood-number"
          defaultValue={5}
          max={10}
          onChange={handleMoodNumberChange}
        />
      </Container>

      <Container align="center" sx={{ padding: "1rem" }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <TextField
            label="What happened with you today?"
            id="mood-text"
            value={moodText}
            onChange={handleMoodTextChange}
          ></TextField>
        </FormControl>
      </Container>
      <Container align="center" sx={{ padding: "1rem" }}>
        <Button align="center" onClick={handleSumbit}>
          Send
        </Button>
      </Container>
    </>
  );
}
