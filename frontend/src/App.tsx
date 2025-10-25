import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Title from "./pages/Title";
import HandleCreate from "./pages/Create.tsx";
import HandleTree from "./pages/handleVisitor.tsx";
import Header from "./components/Header.tsx";
import Error from "./pages/Error.tsx";
import CreatorView from "./pages/CreatorView.tsx";
//import Facade from ".components/facade.tsx";
import { Landing } from './landing.tsx';
import CreatorPreview from "./pages/CreatorPreview.tsx";

const App = () => {

  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const designWidth = 393;
    const designHeight = 824;

    function scaleViewport() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const viewport = viewportRef.current;
      if (!viewport) return;

      const header = document.getElementById("main-header");
      const headerHeight = header ? header.offsetHeight : 0;
      const availableHeight = vh - headerHeight;

      const scale = Math.min(vw / designWidth, availableHeight / designHeight);

      const offsetX = (vw - designWidth * scale) / 2;
      const offsetY = headerHeight + (availableHeight - designHeight * scale) / 2;

      viewport.style.transform = `scale(${scale})`;
      viewport.style.transformOrigin = "top left";
      viewport.style.position = "absolute";
      viewport.style.left = `${offsetX}px`;
      viewport.style.top = `${offsetY}px`;
    }

    scaleViewport();
    window.addEventListener("resize", scaleViewport);
    return () => window.removeEventListener("resize", scaleViewport);
  }, []);

  return (
    <div className="flex flex-col relative w-screen h-screen overflow-hidden bg-[#111]">
      <Header />

      <div className="viewport" ref={viewportRef}>
        <Router>
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/create/:id" element={<HandleCreate />} />
            <Route path="/create/:id/preview" element={<CreatorPreview />} />
            <Route path="/create/" element={<Navigate to="./new" replace />} />
            <Route path="/t/:id/" element={<HandleTree />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>

      {/* <Facade text1="" text2="" /> */}
    </div>
  );
};

export default App;