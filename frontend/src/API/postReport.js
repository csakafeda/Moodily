export const submitReport = (postData, setError) => {
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
        .then((res) => {
            if (res.status === 200) {
                res.json();
            }
            if (res.status === 404) {
                setError("You already posted today!");
            }
        });
}