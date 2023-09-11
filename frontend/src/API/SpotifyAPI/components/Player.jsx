import SpotifyPlayer from 'react-spotify-web-playback';
import {useEffect, useState} from "react";

export const Player = ({accessToken, trackUri}) => {
    const [play, setPlay] = useState(false);

    useEffect(() => {
        setPlay(true);
    }, [trackUri]);

    if (!accessToken) return null;
    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            callback={state => {
                if (!state.isPlaying) setPlay(false);
            }}
            play={play}
            uris={trackUri ? [trackUri] : []}
            styles={{
                bgColor: '#333',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                savedColor: '#fff',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
            }}
        />
    )
}