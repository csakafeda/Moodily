import {Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Loading from "../../Components/Loading.jsx";
import {getAllPost} from "../../API/postAPI.js";
import {averageCalculator} from "./analyticsCalculator.js";

export default function AnalyticsPage() {
    const [loading, setLoading] = useState(false);
    const [averageRate, setAverageRate] = useState(0);

    useEffect(() => {
        setLoading(true);
        getAllPost()
            .then(data => {
                const average = averageCalculator(data);
                setAverageRate(Math.round(average * 100) / 100);
            })
            .finally(setLoading(false));
    }, [])

    if (loading) return <Loading/>;

    return (
        <>
            <Container align="center" sx={{padding: "1rem"}}>
                <h1>Analytics</h1>
                <Typography>
                    Average rate: {averageRate}
                </Typography>
            </Container>
        </>
    );
}
