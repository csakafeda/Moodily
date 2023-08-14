import {getUserId} from "../Tools/userTools.js";

export const getAllPost = () => {
    return fetch(`/api/${getUserId()}`)
        .then((res) => res.json());
}
export const getPostById = (id) => {
    return fetch(`/api/post/${id}`)
        .then((res) => res.json());
}
export const getTodaysPost = () => {
    return fetch(`/api/today`)
        .then((res) => res.json());
}

export const updateReport = (postId, postData) => {
    return fetch(`/api/update/${postId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "moodRate": postData.rate,
            "moodDescription": postData.text,
            "moodPicture": postData.picture,
            "moodMusic": postData.music
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