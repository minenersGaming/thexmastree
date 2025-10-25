import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Title from "./pages/Title";
import HandleCreate from "./pages/Create.tsx";
import HandleTree from "./pages/handleVisitor.tsx";
import Header from "./components/Header.tsx";
import Error from "./pages/Error.tsx";
import CreatorPreview from "./pages/CreatorPreview.tsx";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header/>
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
  );
};

export default App;
