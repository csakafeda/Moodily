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
import {isUserSignedIn, signUserOut} from "../Tools/userTools.js";
import {Fragment, useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const menuItems = {
    'Home': <HomeIcon/>,
    'Calendar': <CalendarMonthIcon/>,
    'Goals': <EmojiEventsIcon/>,
    'Music': <LibraryMusicIcon/>,
    'Analytics': <AnalyticsIcon/>,
    'Profile': <AccountCircleIcon/>
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
                {Object.entries(menuItems).map(([text, icon]) => (
                    <Fragment key={text}>
                        <ListItem disablePadding onClick={() => {
                            if (text === "Home") {
                                navigate("/");
                            } else {
                                navigate(`/${text.toLowerCase()}`);
                            }
                        }}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                    </Fragment>
                ))}
            </Box>
        )
    ;

    return (
        <>
            <Toolbar>
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer(true)}>MENU</Button>
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
                    component="span"
                    variant="h4"
                    color="inherit"
                    sx={{cursor: "pointer", alignItem: "center"}}
                    onClick={() => navigate("/")}
                >
                    Moodily
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                {isUserSignedIn() ? (
                    <Button
                        sx={{
                            cursor: "pointer",
                            backgroundColor: "pink",
                            borderRadius: 5,
                            margin: "3vw",
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
                        sx={{
                            cursor: "pointer",
                            backgroundColor: "pink",
                            borderRadius: 5,
                            margin: "3vw",
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
