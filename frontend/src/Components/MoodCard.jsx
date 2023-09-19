import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const MoodCard = ({mood}) => {
    const navigate = useNavigate();
    return (
        <Card
            sx={{
                display: "flex",
                margin: "5% 5% 5% 5%",
                maxWidth: "50%",
                padding: "1rem",
                borderRadius: "8px"
            }}
        >
            <Box sx={{display: "flex", flexDirection: "column", flexGrow: 1}}>
                <CardContent sx={{flex: "1"}}>
                    <Typography
                        component="div"
                        variant="h5"
                        sx={{fontWeight: "bold", marginBottom: "0.5rem"}}
                    >
                        Date: {mood.moodDate}
                    </Typography>
                    <Typography
                        component="div"
                        variant="subtitle1"
                        sx={{marginBottom: "0.25rem"}}
                    >
                        Mood rate: {mood.moodRate}
                    </Typography>
                    <Typography
                        component="div"
                        variant="subtitle1"
                        sx={{marginBottom: "0.25rem"}}
                    >
                        Description: {mood.moodDescription}
                    </Typography>
                    <Typography
                        component="div"
                        variant="subtitle1"
                        sx={{marginBottom: "0.25rem"}}
                    >
                        Music: {mood.moodMusic}
                    </Typography>
                    {
                        /*
                       <Typography
                          component="div"
                          variant="subtitle1"
                          sx={{marginBottom: "0.25rem"}}
                      >
                          Picture: {mood.moodPicture}
                      </Typography>
                      */
                    }

                </CardContent>
                <Button sx={{fontWeight: "bold"}}
                        onClick={() => {
                            navigate(`/updatePost/${mood.id}`);
                        }}>
                    Update
                </Button>
            </Box>

        </Card>
    );
};
