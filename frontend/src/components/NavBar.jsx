import {Outlet, useNavigate} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar sx={{flexWrap: "wrap"}}>
                    <Typography
                        component="span"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{
                            cursor: "pointer",
                            userSelect: "none",
                            flexGrow: 1,
                        }}
                        onClick={() => navigate("/")}
                    >
                        Moodily
                    </Typography>
                    <Typography
                        component="span"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{
                            cursor: "pointer",
                            userSelect: "none",
                            flexGrow: 1,
                        }}
                        onClick={() => navigate("/profile")}
                    >
                        Profile
                    </Typography>
                    <Typography
                        component="span"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{
                            cursor: "pointer",
                            userSelect: "none",
                            flexGrow: 1,
                        }}
                        onClick={() => navigate("/analytics")}
                    >
                        Analytics
                    </Typography>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
}
