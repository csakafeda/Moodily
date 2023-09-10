import useAuth from "./auth/useAuth.jsx";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import SpotifyWebApi from "spotify-web-api-node";
import {SongCard} from "./components/SongCard.jsx";
import {Player} from "./components/Player.jsx";

const spotifyApi = new SpotifyWebApi({
    clientId: "d65b7acbcf89421faada8ab7b50a0752",
})
export const Dashboard = ({code}) => {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState();

    const chooseTrack = track => {
        setPlayingTrack(track);
        setSearch("");
    }

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken]);

    useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;
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
        <Container style={{display: "flex", height: "100vh", flexDirection: "column"}}>
            <input
                type={"search"}
                placeholder={"Search song/artist"}
                value={search}
                onChange={e => setSearch(e.target.value)}/>
            <div style={{overflowY: "auto"}}>
                {searchResults.map(song => (
                    <SongCard track={song} key={song.uri} chooseTrack={chooseTrack}/>
                ))

                }
            </div>
            <div>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
            </div>
        </Container>
    )
}