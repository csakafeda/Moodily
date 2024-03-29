import {Outlet, useNavigate} from "react-router-dom";
import {
    Box,
    Button,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
    Toolbar,
    Typography,
} from "@mui/material";
import {getUsername, isUserSignedIn, signUserOut} from "../Tools/userTools.js";
import {Fragment, useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MenuIcon from "@mui/icons-material/Menu";

const menuItemLoggedIn = {
    'Home': <HomeIcon/>,
    'Calendar': <CalendarMonthIcon/>,
    'Goals': <EmojiEventsIcon/>,
    'Music': <LibraryMusicIcon/>,
    'Analytics': <AnalyticsIcon/>,
    'Profile': <AccountCircleIcon/>
};

const menuItemNotLoggedIn = {
    'Home': <HomeIcon/>,
    'Music': <LibraryMusicIcon/>
};

const anchor = "left"; // modify if menu else

export default function NavBar() {
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === "keydown" && (event).key === "Tab") return;
        setState(open);
    };

    const navigate = useNavigate();
    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
                {Object.entries(
                    getUsername() !== null ? menuItemLoggedIn : menuItemNotLoggedIn
                ).map(([text, icon]) => (
                    <Fragment key={text}>
                        <ListItem
                            disablePadding
                            onClick={() => {
                                if (text === "Home") {
                                    navigate("/");
                                } else {
                                    navigate(`/${text.toLowerCase()}`);
                                }
                            }}
                            sx={{
                                padding: "5vh",
                                fontSize: "2rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "&:hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                                },
                            }}
                        >
                            <ListItemButton>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                    </Fragment>
                ))}
            </div>
        </Box>
    );

    return (
        <>
            <Toolbar
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: "1rem",
                    alignItems: "stretch",
                    backgroundColor: "#038c4c"
                }}>
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer(true)} sx={{fontSize: "2rem"}}>
                        <MenuIcon/>
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </Fragment>
                <Typography
                    color="primary"
                    sx={{
                        cursor: "pointer",
                        alignItem: "center",
                        fontFamily: "Indie Flower",
                        fontSize: "3.125rem"}}
                    onClick={() => navigate("/")}
                >
                    Moodily
                </Typography>
                {isUserSignedIn() ? (
                    <Button
                        color="primary"
                        sx={{
                            cursor: "pointer",
                            fontSize: "20px"
                        }}
                        onClick={() => {
                            signUserOut();
                            navigate("/");
                        }}
                    >
                        Logout
                    </Button>
                ) : (
                    <Button
                        color="primary"
                        sx={{
                            cursor: "pointer",
                            fontSize: "20px"
                        }}
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </Button>
                )}

            </Toolbar>
            <Outlet/>
        </>
    );
}
