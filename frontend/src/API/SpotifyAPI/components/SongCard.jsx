export const SongCard = ({track, chooseTrack}) => {
    const handlePlay = () => {
        chooseTrack(track);
    }
    return (
        <div style={{
            cursor: "pointer",
            display: "flex",
            padding: "10px",
            margin: "10px",
            backgroundColor: "black",
            alignItems: "center",
        }}
             onClick={handlePlay}>
            <img alt="album cover" src={track.albumUrl} style={{height: "100px", width: "100px"}}/>
            <div style={{margin: "0 0 0 20px"}}>
                <div style={{color: "white"}}>{track.title}</div>
                <div style={{color: "darkgray", fontSize: "calc(100% - 10px)"}}>{track.artist}</div>
            </div>
        </div>
    )
}