import {Box, Button, FormControl, TextField} from "@mui/material";
import {useState} from "react";
import Loading from "../../Components/Loading.jsx";
import {useNavigate} from "react-router-dom";

export default function Login() {
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
        navigate("/");
    }

    if (loading) {
        return <Loading/>;
    }

    return (
        <Box onSubmit={onSubmit} component={"form"}>
            <FormControl>
                <TextField id={"username"}
                           label={"Username:"}
                           onChange={handleUsernameChange}>
                </TextField>
            </FormControl>

            <FormControl>
                <TextField id={"password"}
                           label={"Password"}
                           type="password"
                           onChange={handlePasswordChange}>
                </TextField>
            </FormControl>

            <Button type={"submit"}>
                Login
            </Button>

        </Box>
    )
}