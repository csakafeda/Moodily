import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import {useState} from "react";
import Loading from "../../Components/Loading.jsx";
import {useNavigate} from "react-router-dom";

export default function Singup() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [user, setUser] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    const handleUsernameChange = (e) => setUser({...user, username: e.target.value});
    const handleEmailChange = (e) => setUser({...user, email: e.target.value});
    const handlePassword1Change = (e) => setUser({...user, password1: e.target.value});
    const handlePassword2Change = (e) => setUser({...user, password2: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        if (user.password1 === user.password2) {
            console.log({
                username: user.username,
                email: user.email,
                password: user.password1
            });
            navigate("/");
        } else {
            setError("Passwords are not the same");
        }
    }

    if (loading) {
        return <Loading/>;
    }

    return (
        <Box onSubmit={onSubmit} component={"form"}>
            <FormControl>
                <TextField id={"username"}
                           label={"Username"}
                           onChange={handleUsernameChange}>
                </TextField>
            </FormControl>

            <FormControl>
                <TextField id={"email"}
                           label={"Email"}
                           onChange={handleEmailChange}>
                </TextField>
            </FormControl>

            <FormControl>
                <TextField id={"password1"}
                           label={"Password"}
                           type="password"
                           onChange={handlePassword1Change}>
                </TextField>
            </FormControl>

            <FormControl>
                <TextField id={"password2"}
                           label={"Password again"}
                           type="password"
                           onChange={handlePassword2Change}>
                </TextField>
            </FormControl>

            <Button type={"submit"}>
                Sign up
            </Button>

            {error &&
                <Typography color={"red"}>
                    {error}
                </Typography>
            }
        </Box>
    )
}