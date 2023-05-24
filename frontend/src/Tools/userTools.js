export const isUserSignedIn = () => localStorage.getItem("userId") !== null;
export const signUserOut = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem("username")
};
export const setUserId = (userId) => localStorage.setItem("userId", JSON.stringify(userId));
export const setUserName = (username) => localStorage.setItem("username", username);