export const addUser = (user, navigate) => {
    return fetch("/api/users", {
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
                res.json();
                navigate("/");
            }
        });
}