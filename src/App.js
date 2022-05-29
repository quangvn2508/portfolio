import Header from "./header/Header";
import MainPage from "./mainpage/MainPage";
import Footer from "./footer/Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import CompetitiveProgramming from "./cp/CompetitiveProgramming";
import Projects from "./projects/Projects";
import Profile from "./profile/Profile";

function App() {
    return (
        <Router>
        <div className="position-relative h-100">
            <Header/>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/competitive_programming" element={<CompetitiveProgramming />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
            <Footer/>
        </div>
        </Router>
    );
}

export default App;
