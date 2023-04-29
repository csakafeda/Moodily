import {
    Button
} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Button align="center"
                    sx={{width: "50%"}}
                    size="large"
                    onClick={() => navigate("/moodForm")}>
                Daily Mood
            </Button>
        </>
    );
}
