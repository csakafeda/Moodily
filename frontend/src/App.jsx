import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import CreatePost from "./Pages/Post/CreatePost.jsx";
import UpdatePost from "./Pages/Post/UpdatePost.jsx";
import AnalyticsPage from "./Pages/Analytics/AnalyticPage.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import LogIn from "./Pages/Auth/LogIn.jsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeOptions } from "./Theme.js";
import Calendar from "./Pages/Calendar/Calendar.jsx";
import Goals from "./Pages/Goals/Goals.jsx";
import MusicPage from "./Pages/MusicList/MusicList.jsx";

function App() {
    const theme = createTheme(themeOptions);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/createPost" element={<CreatePost />} />
                        <Route path="/updatePost/:postId" element={<UpdatePost />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/music" element={<MusicPage />} />
                        <Route path="/goals" element={<Goals />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
