import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Title from "./pages/Title";
import Capture from "./pages/Capture";
import Decorate from "./pages/Decorate";
import Title2 from "./pages/title2";

const App = () => {
  return (
      <div className="flex flex-col">
    <div style={{
      background: "rgba(0, 28, 29, 1)",
      height: "8vh",
    }} className="flex bg-black p-3 items-center">
      <img draggable="false" src="src/assets/logo.svg" style={{height: "38px"}} className="px-3"></img>
    </div>

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
      <Route path="*" element={
        <div className="items-center flex-col justify-center"
          style={{
            width: "100vw",
            height: "92vh",
            overflow: "hidden",
            background: "var(--sky-intro, radial-gradient(89.44% 41.26% at 50% 54.46%, #00504C 0%, #012E34 100%))",
            position: "relative",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full shadow-2xl">
            <img src="src/assets/cane.svg" style={{
              width: "182.065px",
              height: "188.57px",
              flexShrink: "0",
            }}></img>
            <h1 style={{
              color: "#FFFAE0",
              fontFamily: "Noto Sans Thai",
              fontSize: "55.156px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}>ERROR</h1>
            <h1 style={{
              color: "#FFFAE0",
              fontFamily: "Noto Sans Thai",
              fontSize: "20px",
              fontWeight: "700",
            }}>This page cound not be found</h1>
              <a href="/"><button className="text-white p-3 rounded-full"
                style={{
                  marginTop:"13px",
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) -20.73%, rgba(255, 255, 255, 0.3) 100%)",
                  backdropFilter: "blur(2px)",
                  fontFamily: "Noto Sans Thai, sans-serif",
                }}
              >
                  <h1 style={{
                    opacity: 1,
                  }}>
                    กลับสู่หน้าหลัก
                  </h1>
              </button></a>
          </div>
        </div>
      } />
      </Routes>
    </Router>
    </div>
  );
};

export default App;