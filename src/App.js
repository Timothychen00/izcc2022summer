import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignupPage from "./pages/signup";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/signup" element={<SignupPage />} exact />
            </Routes>
        </Router>
    );
}

export default App;