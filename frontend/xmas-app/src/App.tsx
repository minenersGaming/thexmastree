import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Title from "./pages/Title";
import New from "./pages/Create.tsx";
import Capture from "./pages/Capture";
import HandleTree from "./pages/handleTree.tsx";
import Header from "./components/header.tsx";
import Error from "./pages/Error.tsx";
import { Landing } from './landing.tsx'

const App = () => {
  return (
      <div className="flex flex-col">
    <Header />

    <Router>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/capture" element={<Capture />} />
        <Route path="/create" element={<New />} />
        <Route path="/t/:id" element={<HandleTree />} />
        {/* 404 Page */}
      <Route path="*" element={
        <Error />
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