import {Dashboard} from "./Dashboard.jsx";
import {SpotifyLogin} from "./auth/SpotifyLogin.jsx";

const code = new URLSearchParams(window.location.search).get("code");

export const SpotifyPage = () => {
    return (
        <>
            {code ? <Dashboard code={code}/> : <SpotifyLogin/>}
        </>
    )
}