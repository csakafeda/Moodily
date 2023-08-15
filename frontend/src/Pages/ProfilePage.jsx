import {Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Loading from "../Components/Loading.jsx";
import {getAllPost} from "../API/postAPI.js";
import {getUsername} from "../Tools/userTools.js";
import {MoodCard} from "../Components/MoodCard.jsx";

export default function ProfilePage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAllPost()
            .then((res) => setData(res))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loading/>;

    return (
        <>
            {
                <Container align="center" sx={{padding: "1rem"}}>
                    <Typography sx={{fontSize: "5vh"}}>Profile page</Typography>
                    Username: {getUsername()}
                    {(data.length === 0)
                        ? <div style={{paddingTop: "10vh", fontSize: "4vh", color: "red"}}>
                            You have not posted yet.
                        </div>
                        : data.map((mood) => (<MoodCard key={mood.id} mood={mood}/>))
                    }
                </Container>
            }
        </>
    );
}
