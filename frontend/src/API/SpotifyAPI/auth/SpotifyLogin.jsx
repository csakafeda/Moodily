const CLIENT_ID = "d65b7acbcf89421faada8ab7b50a0752";
const REDIRECT_URL = "http://localhost:5173/music";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "code";

    export const SpotifyLogin = () => {
        const loginWithSpotify = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

        return (
            <>
                <a href={loginWithSpotify}> Login with spotify</a>
            </>
        )
    }