export const isUserSignedIn = () => localStorage.getItem("userId") !== null;
export const signUserOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("access_token")
};
export const setUserId = (userId) => localStorage.setItem("userId", JSON.stringify(userId));
export const setUserName = (username) => localStorage.setItem("username", username);

export const getUsername = () => {
    return localStorage.getItem("username");
}

export const getUserId = () => {
    return localStorage.getItem("userId");
}