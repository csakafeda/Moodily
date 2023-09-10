import {useEffect, useState} from "react";
import {loginWithSpotify, searchInSpotify} from "./spotifyAPI.js";

export const SpotifyLogin = () => {
    const [token, setToken] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("spotify_token");

        if (!token && hash) {
            token = hash.substring(1)
                .split("&")
                .find(e => e.startsWith("access_token"))
                .split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("spotify_token", token);
        }
        setToken(token);
    }, []);


    const searchMusic = async (e) => {
        e.preventDefault();
        if (!token) {
            console.error("No access token available.");
            return;
        }
        const queryParams = new URLSearchParams({
            q: searchInput.toString(),
            type: "artist"
        });

        try {
            await searchInSpotify(setArtists, queryParams, token);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("spotify_token");
    }


    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt={""}/> : <div>No image</div>}
                {artist.name}
            </div>)
        )
    }

    return (
        <>
            {!token
                ? <a href={loginWithSpotify}> Login with Spotify</a>
                : <button onClick={logout}> Logout </button>
            }
            {token
                ?
                <form onSubmit={searchMusic}>
                    <input type="text" onChange={e => setSearchInput(e.target.value)}/>
                    <button type={"submit"}> Search</button>
                </form>
                : <p>Please login</p>
            }
            {renderArtists()}
        </>
    )
}