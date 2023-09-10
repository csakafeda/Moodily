import {Typography} from '@mui/material';
import {SpotifyPage} from "../../API/SpotifyAPI/SpotifyPage.jsx";

const MusicPage = () => {
    return (
        <div>
            <Typography variant="h4">
                <SpotifyPage/>
            </Typography>

        </div>
    );
};

export default MusicPage;
