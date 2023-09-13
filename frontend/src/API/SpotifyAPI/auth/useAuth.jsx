import {useEffect, useState} from "react";
import axios from "axios";

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        if (localStorage.getItem("access_token") !== null) {
            setAccessToken(localStorage.getItem("access_token"));
        } else {
            axios.post("http://localhost:3001/login", {
                code,
            })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setRefreshToken(res.data.refreshToken)
                    setExpiresIn(res.data.expiresIn)
                    localStorage.setItem("access_token_code", code);

                    window.history.pushState({}, null, "/");
                })
                .catch((e) => {
                    console.error(e);
                    //TODO display to the user
                })
        }

    }, [code])

    useEffect(() => {
        const storedAccessToken = localStorage.getItem("access_token");
        const storedExpiresIn = localStorage.getItem("expires_in");

        if (storedAccessToken && storedExpiresIn && Date.now() < parseInt(storedExpiresIn, 10)) {
            setAccessToken(storedAccessToken);
        } else if (refreshToken) {
            axios.post("http://localhost:3001/refresh", {
                refreshToken,
            })
                .then(res => {
                    setAccessToken(res.data.accessToken);
                    setExpiresIn(res.data.expiresIn);
                    localStorage.setItem("access_token", res.data.accessToken);
                    localStorage.setItem("expires_in", res.data.expiresIn);
                })
                .catch((e) => {
                    console.error(e);
                    //TODO display to the user
                });
        }
    }, [refreshToken, expiresIn]);

    return accessToken
}