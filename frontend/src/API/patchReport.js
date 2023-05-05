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