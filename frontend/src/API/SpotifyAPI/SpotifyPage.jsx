import {Dashboard} from "./components/Dashboard.jsx";
import {SpotifyLogin} from "./auth/SpotifyLogin.jsx";

const code = new URLSearchParams(window.location.search).get("code");

export const SpotifyPage = ({setSelected}) => {

    return (
        <>
            {code
                ? <Dashboard setSelected={setSelected} code={code}/>
                : <SpotifyLogin/>
            }
        </>
    )
}