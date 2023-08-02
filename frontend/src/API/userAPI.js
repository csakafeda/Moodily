import {setUserId, setUserName} from "../Tools/userTools.js";

export const signup = (user, navigate) => {
    return fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": user.username,
            "email": user.email,
            "password": user.password
        })
    })
        .then((res) => {
            if (res.status === 200) {
                res.json()
                    .then(data => {
                        setUserId(data.id);
                        setUserName(data.username)
                        console.log(data);
                    })
                navigate("/");
            }
        });
}

export const login = (user, navigate) => {
    return fetch(`/api/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": user.username,
            "password": user.password
        })
    })
        .then((res) => {
            if (res.status === 200) {
                res.json()
                    .then(data => {
                        console.log(data)
                        setUserId(data.userId);
                        setUserName(data.username);
                        navigate("/")
                    })
            }
        });
}

export const userSearcher = (id) => {
    return fetch(`/api/users/${id}`)
        .then((res) => res.json());
}