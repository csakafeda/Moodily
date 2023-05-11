import {
    Container,
    Rating,
    FormControl,
    TextField,
    Button,
    Box,
    Stack,
    Typography,
    styled
} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function MoodForm({onSave, error, onCancel}) {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [rate, setRate] = useState("");
    const [music, setMusic] = useState("");
    const [picture, setPicture] = useState("");

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    const handleRateChange = (e) => setRate(e.target.value);
    const handleTextChange = (e) => setText(e.target.value);
    const handleMusicChange = (e) => setMusic(e.target.value);
    const handlePictureChange = (e) => setPicture(e.target.value);
    const handleMoodChange = () => navigate("/updatePost");

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
                        labelid="rate"
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        onChange={handleRateChange}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />
                    }
                    />
                </FormControl>

                <FormControl align="center" sx={{padding: "1rem", color: "secondary.main"}}>
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
