export const submitReport = (rate, text, music, picture, setNavigate) => {
    fetch("/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "moodRate": rate,
            "moodDescription": text,
            "moodPicture": music,
            "moodMusic": picture
        })
    })
        .then(res => {
            console.log(res.json());
            setNavigate("/");
        })
}