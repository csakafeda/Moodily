import {Container, Card, Box, CardContent, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Loading from "../Components/Loading.jsx";
import {getAllPost} from "../API/getPosts.js";

export default function ProfilePage() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAllPost()
            .then((res) => setData(res))
            .finally(setLoading(false))
    }, []);

    if (loading) {
        return <Loading/>;
    }

    return (
        <>
            {!data
                ?
                <div> You have no posts yet.</div>
                :
                <Container align="center" sx={{padding: "1rem"}}>
                    <h1>Profile page</h1>
                    {data.map((mood) => (
                        <Card sx={{display: 'flex'}} key={mood.id}>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <CardContent sx={{flex: '1 1 auto'}}>
                                    <Typography component="div" variant="h5">
                                        {mood.moodDescription}
                                    </Typography>
                                    <Typography component="div" variant="subtitle1">
                                        {mood.moodRate}
                                    </Typography>
                                    <Typography component="div" variant="subtitle1">
                                        {mood.moodMusic}
                                    </Typography>
                                    <Typography component="div" variant="subtitle1">
                                        {mood.moodPicture}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    ))}
                </Container>
            }
        </>
    );
}
