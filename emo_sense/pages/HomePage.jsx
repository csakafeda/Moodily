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

  const handleMoodTextChange = () => {};

  return (
    <>
      <Container align="center" sx={{ padding: "1rem" }}>
        <InputLabel id="mood-text">How are you feel today?</InputLabel>
        <Rating name="customized-10" defaultValue={5} max={10} />
      </Container>

      <Container align="center" sx={{ padding: "1rem" }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="mood-text">What happened with you today?</InputLabel>
          <TextField
            labelid="mood-text"
            id="mood-text"
            value={moodText}
            onChange={handleMoodTextChange}
          ></TextField>
        </FormControl>
      </Container>
      <Container align="center" sx={{ padding: "1rem" }}>
        <Button align="center">Send</Button>
      </Container>
    </>
  );
}
