export const SongCard = ({track, chooseTrack}) => {
    const handlePlay = () => {
        chooseTrack(track);
    }
    return (
        <div style={{cursor: "pointer"}}
             onClick={handlePlay}>
            <img src={track.albumUrl} style={{height: "64px", width: "64px"}}/>
            <div>{track.title}</div>
            <div>{track.artist}</div>

        </div>
    )
}