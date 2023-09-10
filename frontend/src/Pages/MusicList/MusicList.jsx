import {Typography} from '@mui/material';
import {SpotifyLogin} from "../../API/Spotify/SpotifyLogin.jsx";

const MusicPage = () => {
    return (
        <div>
            <Typography variant="h4">
                <SpotifyLogin/>
            </Typography>

        </div>
    );
};

export default MusicPage;
