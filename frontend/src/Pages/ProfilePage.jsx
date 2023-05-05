import {Container} from "@mui/material";
import {useState} from "react";
import Loading from "../Components/Loading.jsx";

export default function ProfilePage() {
    const [loading, setLoading] = useState(false);


    return (
        <>
            {loading ?
                (
                    <Loading/>
                ) : (
                    <>
                        <Container align="center" sx={{padding: "1rem"}}>
                            <h1>Profile page</h1>
                        </Container>
                    </>)
            }
        </>
    );
}
