import {
    Container,
    Rating,
    FormControl,
    TextField,
    Button,
    Box,
    Stack,
    Typography
} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function MoodForm({onSave, error, onCancel}) {
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

    const onSubmit = (e) => {
        e.preventDefault();
        return onSave({rate, text, music, picture});
    };

    const handleMoodChange = () => {
        navigate("/updatePost");
    }

    return (
        <>
            <Box onSubmit={onSubmit} component={"form"}>
                <FormControl align="center" sx={{padding: "1rem"}}>
                    <Typography>How are you feel today?</Typography>
                    <Rating
                        labelid="rate"
                        max={5}
                        onChange={handleRateChange}
                    />
                </FormControl>

                <FormControl align="center" sx={{padding: "1rem"}}>
                    <TextField
                        label="What happened with you today?"
                        id="text"
                        value={text}
                        onChange={handleTextChange}
                    ></TextField>
                </FormControl>

                <FormControl align="center" sx={{padding: "1rem"}}>
                    <TextField
                        label="Which music represent your day?"
                        id="music"
                        onChange={handleMusicChange}
                    ></TextField>
                </FormControl>

                <FormControl align="center" sx={{padding: "1rem"}}>
                    <TextField
                        label="Add picture?"
                        id="picture"
                        onChange={handlePictureChange}
                    ></TextField>
                </FormControl>

                <Container align="center" sx={{padding: "1rem"}}>
                    <Button variant="contained" align="center" type={"submit"}>
                        Send
                    </Button>
                </Container>
                {error &&
                    <>
                        <Container align="center" sx={{padding: "1rem", color: 'red'}}>
                            <p>{error}</p>
                            <Button align="center" sx={{color: 'red'}} onClick={handleMoodChange}>
                                Change todays post!
                            </Button>
                        </Container>
                    </>
                }
                <Stack>
                    <Button variant="contained" color="warning" onClick={onCancel}>
                        Cancel
                    </Button>
                </Stack>

            </Box>
        </>
    );
}
