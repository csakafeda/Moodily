import {SpotifyPage} from "../../API/SpotifyAPI/SpotifyPage.jsx";

const MusicPage = () => {
    return (
        <div>
            <h2> Search a music and listen it here</h2>
            <SpotifyPage/>

            <h2>Listen our list</h2>
            <iframe
                style={{
                    borderRadius: "12px",
                }}
                src="https://open.spotify.com/embed/playlist/0P2Tc6l5UFmBsIGv8GxfaS?utm_source=generator"
                width="100%"
                height="500px"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>

        </div>
    );
};

export default MusicPage;
