import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="app-container">
                    <NavBar />
                    <Routes>
                        <Route>
                            <Route path="/" element={<Home />}></Route>
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
