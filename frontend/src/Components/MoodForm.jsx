import {Box, Button, Container, FormControl, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getTodaysPost} from "../API/postAPI.js";
import {customIcons, IconContainer, StyledRating} from "./MoodRater.jsx";
import {getUserId} from "../Tools/userTools.js";
import {SpotifyPage} from "../API/SpotifyAPI/SpotifyPage.jsx";

export default function MoodForm({postToUpdate, onSave, error, onCancel}) {
    const navigate = useNavigate();
    const [text, setText] = useState(postToUpdate ? postToUpdate.moodDescription : "");
    const [rate, setRate] = useState(postToUpdate ? parseInt(postToUpdate.moodRate) : 0);
    const [music, setMusic] = useState(postToUpdate ? postToUpdate.moodMusic : "");
    const [picture, setPicture] = useState(postToUpdate ? postToUpdate.moodPicture : "");
    const [selected, setSelected] = useState();

    useEffect(() => {
        handleMusicChange(selected);
    }, [selected]);
    const handleRateChange = (e) => setRate(e.target.value);
    const handleTextChange = (e) => setText(e.target.value);
    const handleMusicChange = () => {
        setMusic(selected);
    }
    const handlePictureChange = (e) => setPicture(e.target.value);
    const handleMoodChange = async () => {
        getTodaysPost(getUserId())
            .then(res => navigate(`/updatePost/${res.id}`))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        return onSave({"rate": rate, "text": text, "music": music.songUrl, "picture": picture});
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
                        defaultValue={rate}
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
                        defaultValue={text}
                        onChange={handleTextChange}
                    ></TextField>
                </FormControl>


                <Typography>Which music represent your day?</Typography>
                {
                    selected &&
                    <div>Selected music:
                        <a href={selected.songUrl}>{musicDisplayer(selected)}</a>
                    </div>
                }

                <SpotifyPage setSelected={setSelected}/>
                {/*
                <FormControl align="center" sx={{padding: "1rem"}}>
                    <TextField
                        label="Add picture?"
                        id="picture"
                        onChange={handlePictureChange}
                        defaultValue={picture}
                    ></TextField>
                </FormControl>
                */}


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
    )
}

const musicDisplayer = (track) => {
    console.log(track.artist + "-" + track.title);
    return track.artist + "-" + track.title;
}
