import {Outlet, useNavigate} from "react-router-dom";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
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

                            <Button
                                sx={{
                                    cursor: "pointer",
                                    flexGrow: 0.3,
                                    backgroundColor: "pink",
                                    borderRadius: 5,
                                    padding: "0vh 1vw 0vh 1vw",
                                    margin: "3vw"
                                }}
                                onClick={() => {
                                    signUserOut();
                                    navigate("/");
                                }}
                            >
                                Sign up
                            </Button>
                        </>
                        :
                        <>
                            <Button
                                sx={{
                                    cursor: "pointer",
                                    flexGrow: 0.3,
                                    backgroundColor: "pink",
                                    borderRadius: 5,
                                    padding: "0vh 1vw 0vh 1vw",
                                    margin: "3vw"
                                }}
                                onClick={() => navigate("/SignUp")}
                            >
                                Sign up
                            </Button>
                            <Button
                                sx={{
                                    cursor: "pointer",
                                    flexGrow: 0.3,
                                    backgroundColor: "pink",
                                    borderRadius: 5,
                                    padding: "0vh 1vw 0vh 1vw",
                                    margin: "3vw"
                                }}
                                onClick={() => navigate("/LogIn")}
                            >
                                Log in
                            </Button>
                        </>
                    }

                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    )
}
