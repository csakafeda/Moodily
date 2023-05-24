import {Box, Button, Container, FormControl, TextField, Typography} from "@mui/material";
import {useState} from "react";
import Loading from "../../Components/Loading.jsx";
import {useNavigate} from "react-router-dom";
import {login} from "../../API/userAPI.js";

export default function LogIn() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleUsernameChange = (e) => setUser({...user, username: e.target.value});
    const handlePasswordChange = (e) => setUser({...user, password: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        login(user, nav => navigate(nav));
        navigate("/");
    }

    if (loading) {
        return <Loading/>;
    }

    return (
        <Container sx={{marginBlock: 2}}>
            <Box onSubmit={onSubmit} component={"form"} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "5vh",
                margin: "4vh 20% 4vh 20%",
                border: "1vh solid",
                borderRadius: "0.25rem",
            }}>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <FormControl sx={{marginBottom: "2rem"}}>
                    <TextField id={"username"}
                               label={"Username:"}
                               required
                               onChange={handleUsernameChange}>
                    </TextField>
                </FormControl>

                <FormControl sx={{marginBottom: "2rem"}}>
                    <TextField id={"password"}
                               label={"Password"}
                               type="password"
                               required
                               onChange={handlePasswordChange}>
                    </TextField>
                </FormControl>

                <Typography onClick={() => navigate("/signup")}
                            sx={{
                                cursor: "pointer",
                                userSelect: "none",
                                marginBottom: "3vh"
                            }}>
                    Don't have an account? Sign Up
                </Typography>

                <Button type={"submit"}>
                    Login
                </Button>
            </Box>
        </Container>
    )
}