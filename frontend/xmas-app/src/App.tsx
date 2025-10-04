import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Title from "./pages/Title";
import Capture from "./pages/Capture";
import Decorate from "./pages/Decorate";
import Title2 from "./pages/title2";

const App = () => {
  return (
    <Router>
      {/*<nav style={{ margin: "1rem" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>*/}

      

      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/Decorate" element={<Decorate />} />
        <Route path="/Capture" element={<Capture />} />
        <Route path="/title" element={<Title2 />} />
        {/* 404 Page */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;