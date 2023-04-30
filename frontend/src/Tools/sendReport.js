export const submitReport = (rate, text, music, picture, setNavigate, setError) => {
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
            if (res.ok) {
                setNavigate("/");
            } else {
                throw new Error("Network response was not ok");
            }
        })
        .catch(e => {
            setError("You already posted today");
        });
}