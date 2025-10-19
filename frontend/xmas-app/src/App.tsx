import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Title from "./pages/Title";
import New from "./pages/New.tsx";
import Capture from "./pages/Capture";
import HandleTree from "./pages/handleTree.tsx";
import { Landing } from './landing.tsx'

const App = () => {
  return (
      <div className="flex flex-col">
    <div style={{
      background: "rgba(0, 28, 29, 1)",
      height: "6vh",
    }} className="flex min-h-[40px] p-3 items-center z-[6969]">
      <img draggable="false" src="/src/assets/logo.svg" style={{height: "3vh", minHeight: "20px", maxHeight: "23px"}} className="pl-[10px]"></img>
    </div>

    <Router>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/capture" element={<Capture />} />
        <Route path="/creator/create" element={<New />} />
        <Route path="/t/:id" element={<HandleTree />} />
        {/* 404 Page */}
      <Route path="*" element={
        <div className="items-center flex-col justify-center" id="common-bg">
          <div className="flex flex-col items-center justify-center h-full shadow-2xl ">
            <img src="/src/assets/cane.svg" className="w-[182.065px] h-[188.57px] flex-shrink-0"></img>
            <p className="font-noto-sans-thai text-ivory text-[55.156px] font-[700] " style={{
              fontStyle: "normal",
              lineHeight: "normal",
            }}>ERROR</p>
            <p className="font-noto-sans-thai text-ivory font-[700] text-[20px]">
              This page cound not be found</p>
              <a href="/"><button className="text-white p-3 rounded-full mt-[13px] font-noto-sans-thai"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) -20.73%, rgba(255, 255, 255, 0.3) 100%)",
                  backdropFilter: "blur(2px)",
                }}
              >
                  <h1 className="opacity-100">กลับสู่หน้าหลัก</h1>
              </button></a>
          </div>
        </div>
      } />
      </Routes>
    </Router>

      {/**<div id="facade">
        <div className="flex flex-col">
          <p>โปรดรับชม Demo บนหน้าจอมือถือ</p>
        <p>(แนะนำที่ 393 x 852 / iPhone 16)</p>
        </div>
      </div>*/}

    </div>
    
  );
};

export default App;