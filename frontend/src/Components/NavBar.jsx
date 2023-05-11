import {Outlet, useNavigate} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {isUserSignedIn, signUserOut} from "../Tools/userTools.js";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar sx={{flexWrap: "wrap"}} variant="dense">
                    <Typography
                        component="span"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{cursor: "pointer", flexGrow: 1}}
                        onClick={() => navigate("/")}
                    >
                        Moodily
                    </Typography>
                    <Typography
                        component="span"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{cursor: "pointer", flexGrow: 1}}
                        onClick={() => navigate("/profile")}
                    >
                        Profile
                    </Typography>
                    <Typography
                        component="span"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{cursor: "pointer", flexGrow: 1,}}
                        onClick={() => navigate("/analytics")}
                    >
                        Analytics
                    </Typography>
                    {isUserSignedIn() ?
                        <>
                            <Typography
                                component="span"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{cursor: "pointer"}}
                                onClick={() => {
                                    signUserOut();
                                    navigate("/");
                                }}
                            >
                                Sign out
                            </Typography>
                        </>
                        :
                        <>
                            <Typography
                                color="primary"
                                noWrap
                                sx={{
                                    cursor: "pointer",
                                    flexGrow: 0.3,
                                    backgroundColor: "pink",
                                    borderRadius: 5,
                                    padding: "0vh 1vw 0.5vh 1vw",
                                    margin: "3vw"
                                }}
                                onClick={() => navigate("/SignUp")}
                            >
                                Sign up
                            </Typography>
                            <Typography
                                color="primary"
                                noWrap
                                sx={{
                                    cursor: "pointer",
                                    flexGrow: 0.3,
                                    backgroundColor: "pink",
                                    borderRadius: 5,
                                    padding: "0vh 1vw 0.5vh 1vw"
                                }}
                                onClick={() => navigate("/LogIn")}>
                                Log in
                            </Typography>
                        </>
                    }

                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    )
}
