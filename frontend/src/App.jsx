import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import MoodForm from "./pages/MoodForm.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/moodForm" element={<MoodForm />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
