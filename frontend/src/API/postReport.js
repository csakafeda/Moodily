export const submitReport = (postData) => {
    return fetch("/api", {
        method: "POST",
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
        .then((res) => res.json());
}