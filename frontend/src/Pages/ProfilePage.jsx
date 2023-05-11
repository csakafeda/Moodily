import {Container, Card, Box, CardContent, Typography, Button} from "@mui/material";
import {useEffect, useState} from "react";
import Loading from "../Components/Loading.jsx";
import {getAllPost} from "../API/postAPI.js";

export default function ProfilePage() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const username = localStorage.getItem("username")

    useEffect(() => {
        setLoading(true);
        getAllPost()
            .then((res) => setData(res))
            .finally(setLoading(false))
    }, []);

    if (loading) return <Loading/>;

    return (
        <>
            {!data
                ?
                <div> You have no posts yet.</div>
                :
                <Container align="center" sx={{padding: "1rem"}}>
                    <h1>Profile page</h1>
                    UserName: {username}

                    {data.reverse().map((mood) => (
                        <Card sx={{display: 'flex', margin: "5% 5% 5% 5%", width: "50%", padding: "1rem"}} key={mood.id}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <CardContent sx={{flex: '1'}}>
                                    <Typography component="div" variant="h5">
                                        Date: {mood.moodDate}
                                    </Typography>
                                    <Typography component="div" variant="subtitle1">
                                        Mood rate: {mood.moodRate}
                                    </Typography>
                                    <Typography component="div" variant="subtitle1">
                                        Description: {mood.moodDescription}
                                    </Typography>
                                    <Typography component="div" variant="subtitle1">
                                        Music: {mood.moodMusic}
                                    </Typography>
                                    <Typography component="div" variant="subtitle1">
                                        Picture: {mood.moodPicture}
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Button sx={{color: "pink"}}> Update </Button>
                        </Card>
                    ))}
                </Container>
            }
        </>
    );
}
