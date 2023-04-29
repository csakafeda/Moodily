import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar.jsx";
import MoodForm from "./pages/MoodForm.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<NavBar/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/moodForm" element={<MoodForm/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
