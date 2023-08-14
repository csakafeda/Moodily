import {Box, Button, Container, FormControl, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getTodaysPost} from "../API/postAPI.js";
import {customIcons, IconContainer, StyledRating} from "./MoodRater.jsx";

export default function MoodForm({postToUpdate, onSave, error, onCancel}) {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [rate, setRate] = useState(0);
    const [music, setMusic] = useState("");
    const [picture, setPicture] = useState("");

    const handleRateChange = (e) => setRate(e.target.value);
    const handleTextChange = (e) => setText(e.target.value);
    const handleMusicChange = (e) => setMusic(e.target.value);
    const handlePictureChange = (e) => setPicture(e.target.value);
    const handleMoodChange = async () => {
        getTodaysPost()
            .then(res => navigate(`/updatePost/${res.id}`))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        return onSave({rate, text, music, picture});
    };

    return (
        <>
            <Box onSubmit={onSubmit} component={"form"} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "5vh",
                margin: "5vh 10vw 5vh 10vw",
                border: "1vh solid",
                borderRadius: "5vh",
            }}>
                <FormControl align="center" sx={{padding: "1rem"}}>
                    <Typography component="h1" variant="h5" sx={{marginBottom: "1rem", color: "primary.main"}}>
                        How are you feel today?
                    </Typography>
                    <StyledRating
                        name="highlight-selected-only"
                        defaultValue={postToUpdate ? postToUpdate.moodRate : rate.toString()}
                        IconContainerComponent={IconContainer}
                        getLabelText={(value) => customIcons[value].label}
                        highlightSelectedOnly
                        onChange={handleRateChange}
                    />
                </FormControl>

                <FormControl align="center" sx={{padding: "1rem", color: "secondary.main"}}>
                    <TextField
                        label="What happened with you today?"
                        id="text"
                        defaultValue={postToUpdate ? postToUpdate.moodDescription : text}
                        onChange={handleTextChange}
                    ></TextField>
                </FormControl>

                <FormControl align="center" sx={{padding: "1rem"}}>
                    <TextField
                        label="Which music represent your day?"
                        id="music"
                        onChange={handleMusicChange}
                        defaultValue={postToUpdate ? postToUpdate.moodMusic : music}
                    ></TextField>
                </FormControl>

                <FormControl align="center" sx={{padding: "1rem"}}>
                    <TextField
                        label="Add picture?"
                        id="picture"
                        onChange={handlePictureChange}
                        defaultValue={postToUpdate ? postToUpdate.moodPicture : picture}
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
                                Change today's post!
                            </Button>
                        </Container>
                    </>
                }

                <Container align="center">
                    <Button variant="contained" align="center" sx={{color: 'red'}} onClick={onCancel}>
                        Cancel
                    </Button>
                </Container>

            </Box>
        </>
    );
}
