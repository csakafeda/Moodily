import {Box, Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import catPic from "../public/ca.png";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Container sx={{padding: "1rem", display: "flex"}}>
                <Box component="img"
                     sx={{width: "40vw", borderRadius: '30%', maxWidth: "20vw"}}
                     alt="Logo."
                     src={catPic}
                />
                <Container>
                    <Typography sx={{padding: "1rem", fontSize: '1.5rem'}}>
                        Welcome to Moodily,
                    </Typography>
                    <Typography>
                        This website is designed to help you better understand your emotions and improve your
                        well-being.
                        Our website allows you to easily record and track your daily experiences, giving you valuable
                        insights
                        into your emotional state and helping you live in the present moment.
                    </Typography>
                    <Typography>
                        Our goal is to help people become more aware of their feelings and develop a deeper
                        understanding
                        of themselves.
                        We believe that by tracking and reflecting on your emotions, you can improve your overall mental
                        health
                        and happiness.
                    </Typography>
                </Container>
            </Container>
            <Container align="center" sx={{padding: '1rem'}}>
                <Button
                    align="center"
                    sx={{
                        color: 'red',
                        backgroundColor: 'black',
                        fontSize: '10vh',
                        width: '20vh',
                        height: '20vh',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    size="large"
                    onClick={() => navigate('/createPost')}
                >
                    +
                </Button>
            </Container>
        </>
    )
}
