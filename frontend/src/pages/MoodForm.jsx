import {
    Container,
    Rating,
    FormControl,
    InputLabel,
    TextField,
    Button,
    Box
} from "@mui/material";
import {useState} from "react";
import {submitReport} from "../Tools/sendReport.js";
import {useNavigate} from "react-router-dom";

export default function MoodForm() {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [rate, setRate] = useState("");
    const [music, setMusic] = useState("");
    const [picture, setPicture] = useState("");

    const handleRateChange = (e) => {
        setRate(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleMusicChange = (e) => {
        setMusic(e.target.value);
    };

    const handlePictureChange = (e) => {
        setPicture(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitReport(rate, text, music, picture, nav => navigate(nav));
    };

    return (
        <>
            <Box onSubmit={handleSubmit} component={"form"}>
                <Container align="center" sx={{padding: "1rem"}}>
                    <InputLabel id="rate">How are you feel today?</InputLabel>
                    <Rating
                        labelid="rate"
                        defaultValue={5}
                        max={10}
                        onChange={handleRateChange}
                    />
                </Container>

                <Container align="center" sx={{padding: "1rem"}}>
                    <FormControl sx={{m: 1, width: 300}}>
                        <TextField
                            label="What happened with you today?"
                            id="text"
                            value={text}
                            onChange={handleTextChange}
                        ></TextField>
                    </FormControl>
                </Container>

                <Container align="center" sx={{padding: "1rem"}}>
                    <FormControl sx={{m: 1, width: 300}}>
                        <TextField
                            label="Which music represent your day?"
                            id="music"
                            onChange={handleMusicChange}
                        ></TextField>
                    </FormControl>
                </Container>

                <Container align="center" sx={{padding: "1rem"}}>
                    <FormControl sx={{m: 1, width: 300}}>
                        <TextField
                            label="Add picture?"
                            id="picture"
                            onChange={handlePictureChange}
                        ></TextField>
                    </FormControl>
                </Container>

                <Container align="center" sx={{padding: "1rem"}}>
                    <Button align="center" type={"submit"}>
                        Send
                    </Button>
                </Container>
            </Box>
        </>
    );
}
