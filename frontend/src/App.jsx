import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import CreatePost from "./Pages/Post/CreatePost.jsx";
import UpdatePost from "./Pages/Post/UpdatePost.jsx";
import AnalyticsPage from "./Pages/Analytics/AnalyticPage.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<NavBar/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/createPost" element={<CreatePost/>}/>
                        <Route path="/updatePost" element={<UpdatePost/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="/analytics" element={<AnalyticsPage/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
