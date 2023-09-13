import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {SongPlayer} from "./SongPlayer.jsx";
import {useLocation} from "react-router-dom";
import useAuth from "../auth/useAuth.jsx";
import {SongCard} from "./SongCard.jsx";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: "d65b7acbcf89421faada8ab7b50a0752",
})

export const Dashboard = ({setSelected, code}) => {
    const accessToken = useAuth(code);
    const [playingTrack, setPlayingTrack] = useState();
    const location = useLocation();
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const chooseTrack = track => {
        if (location.pathname === "/music") {
            setPlayingTrack(track);
            setSearch("");
        } else {
            setSelected(track);
            setSearch("");
        }
    }

    useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;

        spotifyApi.setAccessToken(accessToken);
        let cancel = false;

        spotifyApi.searchTracks(search)
            .then(res => {
                if (cancel) return;
                setSearchResults(res.body.tracks.items.map(track => {
                    const smallestAlbumImg = track.album.images.reduce((smallest, image) => {
                        if (image.height < smallest.height) return image;
                        return smallest
                    }, track.album.images[0])
                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImg.url
                    }
                }))
            });
        return () => cancel = true;
    }, [search, accessToken])

    return (
        <Container
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                alignItems: "center",
                backgroundColor: "#2b835a",
                padding: "20px",
                marginTop: "2vh",
                borderRadius: "20px"
            }}
        >

            {location.pathname === "/music"
                ? <>
                    <input
                        type={"search"}
                        placeholder={"Search song/artist"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            fontSize: "2rem",
                            margin: "20px 0",
                            padding: "10px",
                            border: "2px solid #ccc",
                            borderRadius: "5px",
                            width: "80%",
                        }}
                    />
                    <div
                        style={{
                            overflowY: "auto",
                            maxHeight: "calc(100vh - 200px)",
                            width: "80%",
                        }}
                    >
                        {searchResults.map((song) => (
                            <SongCard track={song} key={song.uri} chooseTrack={chooseTrack}/>
                        ))}
                    </div>
                    <div
                        style={{
                            bottom: "0",
                            width: "50%",
                            backgroundColor: "#fff",
                            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <SongPlayer accessToken={accessToken} trackUri={playingTrack?.uri}/>
                    </div>
                </>
                :
                <div>
                    <input
                        type={"search"}
                        placeholder={"Search song/artist"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            fontSize: "2rem",
                            margin: "20px 0",
                            padding: "10px",
                            border: "2px solid #ccc",
                            borderRadius: "5px",
                            width: "80%",
                        }}
                    />
                    <div
                        style={{
                            overflowY: "auto", maxHeight: "calc(100vh - 200px)", width: "80%",
                        }}
                    >
                        {searchResults.map((song) => (
                            <SongCard track={song} key={song.uri} chooseTrack={chooseTrack}/>))}
                    </div>
                </div>
            }

        </Container>
    );
}