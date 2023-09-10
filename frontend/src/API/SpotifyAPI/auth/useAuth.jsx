import {useEffect, useState} from "react";
import axios from "axios";

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post("http://localhost:3001/login", {
            code,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)

            window.history.pushState({}, null, "/");
        }).catch(() => {
            window.location = "/music"
        })
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const timeout = setInterval(() => {
            axios.post("http://localhost:3001/refresh", {
                refreshToken,
            }).then(res => {
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
            }).catch(() => {
                window.location = "/music"
            })
        }, expiresIn - 60 * 1000);

        return () => clearInterval(timeout);
    }, [refreshToken, expiresIn]);

    return accessToken

}