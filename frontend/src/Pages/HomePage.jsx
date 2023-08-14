import {Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "./button.css"

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Container sx={{padding: "1rem", display: "flex"}}>
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
                    class="button-add"
                    size="large"
                    onClick={() => navigate('/createPost')}
                >
                    +
                </Button>
            </Container>
        </>
    )
}
