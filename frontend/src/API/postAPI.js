import {getUserId} from "../Tools/userTools.js";

export const getAllPost = () => {
    return fetch(`/api`)
        .then((res) => res.json());
}

export const updateReport = (postData) => {
    return fetch(`/api/update/${postData.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "moodRate": postData.rate,
            "moodDescription": postData.text,
            "moodPicture": postData.music,
            "moodMusic": postData.picture
        })
    })
}

export const addPost = (postData, setError, navigate) => {
    return fetch("/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "moodRate": postData.rate,
            "moodDescription": postData.text,
            "moodPicture": postData.picture,
            "moodMusic": postData.music,
            "userId": getUserId()
        })
    })
        .then((res) => {
            if (res.status === 200) {
                res.json();
                navigate("/");
            }
            if (res.status === 404) {
                setError("You already posted today!");
            }
        });
}