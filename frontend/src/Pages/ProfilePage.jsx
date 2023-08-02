import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import Loading from "../Components/Loading.jsx";
import {getAllPost} from "../API/postAPI.js";
import {getUsername} from "../Tools/userTools.js";
import {MoodCard} from "../Components/MoodCard.jsx";

export default function ProfilePage() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAllPost()
            .then((res) => setData(res))
            .finally(setLoading(false));
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
                    Username: {getUsername()}

                    {data
                        ? data.map((mood) => (<MoodCard key={mood.id} mood={mood}/>))
                        : <div> You have not posted yet.</div>
                    }
                </Container>
            }
        </>
    );
}
