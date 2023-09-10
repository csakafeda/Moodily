const CLIENT_ID = "d65b7acbcf89421faada8ab7b50a0752";
const CLIENT_SECRET = "f51208aaa4644ae7925b384378276882";
const REDIRECT_URL = "http://localhost:5173/music";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export const loginWithSpotify = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`

export const searchInSpotify = async (setArtists, queryParams, token) => {
    const response = await fetch(`https://api.spotify.com/v1/search?${queryParams.toString()}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    if (response.status === 200) {
        const data = await response.json();
        setArtists(data.artists.items);
    } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
    }
}