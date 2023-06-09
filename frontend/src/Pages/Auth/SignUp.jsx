import {Box, Button, FormControl, TextField, Typography, Container} from "@mui/material";
import {useEffect, useState} from "react";
import Loading from "../../Components/Loading.jsx";
import {useNavigate} from "react-router-dom";
import isEmail from 'validator/lib/isEmail';
import {signup} from "../../API/userAPI.js";

export default function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [error, setError] = useState("");

    const [user, setUser] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });

    const saveUser = (user) => {
        setLoading(true);
        try {
            signup(user, (nav) => navigate(nav));
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    const handleUsernameChange = (e) => setUser({...user, username: e.target.value});
    const handleEmailChange = (e) => setUser({...user, email: e.target.value});
    const handlePassword1Change = (e) => setUser({...user, password1: e.target.value});
    const handlePassword2Change = (e) => setUser({...user, password2: e.target.value});

    useEffect(() => {
        if (user.password1 === "" || user.password2 === "") {
            setIsValidPassword(false);
        } else if (user.password1 !== user.password2) {
            setIsValidPassword(false);
        } else {
            setIsValidPassword(true);
        }
    }, [user.password1, user.password2])

    useEffect(() => {
        if (isEmail(user.email)) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
    }, [user.email])

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail || !isValidPassword) {
            setError("You are missing some things...")
        } else {
            saveUser({
                username: user.username,
                email: user.email,
                password: user.password1
            });
            navigate("/");
        }
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
                margin: "20vh",
                border: "1rem solid #777",
                borderRadius: "0.25rem",
            }}>
                <FormControl sx={{marginBottom: "2rem"}}>
                    <TextField id={"username"}
                               label={"Username"}
                               onChange={handleUsernameChange}>
                        sx={{marginBottom: "2rem"}}
                    </TextField>
                </FormControl>

                <FormControl sx={{marginBottom: "2rem"}}>
                    <TextField id={"email"}
                               label={"Email"}
                               onChange={handleEmailChange}>
                        sx={{marginBottom: "2rem"}}
                    </TextField>
                </FormControl>

                {isValidEmail ?
                    <Typography color={"green"}>Your email is valid</Typography>
                    :
                    <Typography color={"red"}>Your email is not valid</Typography>
                }

                <FormControl sx={{marginBottom: "2rem"}}>
                    <TextField id={"password1"}
                               label={"Password"}
                               type="password"
                               onChange={handlePassword1Change}>
                    </TextField>
                </FormControl>

                <FormControl sx={{marginBottom: "2rem"}}>
                    <TextField id={"password2"}
                               label={"Password again"}
                               type="password"
                               onChange={handlePassword2Change}>
                        sx={{marginBottom: "2rem"}}
                    </TextField>
                </FormControl>

                {isValidPassword ? <Typography color={"green"}>Passwords are the same!</Typography>
                    :
                    <Typography color={"red"}>Passwords are not the same!</Typography>
                }

                <Button type={"submit"}
                        sx={{marginBottom: "2rem"}}>
                    Sign up
                </Button>
                {error && <Typography>{error}</Typography>}

            </Box>
        </Container>
    )
}