import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Tree = () => {
    const {id} = useParams();

  return (
    <Routes>
        <Route path="/t/dummy" element={
        <div className="flex flex-col items-center justify-center common-bg text-ivory font-bold text-5xl font-noto-sans-thai">
            bro it is here
        </div>
        } />
        <Route path="*" element={
        <div className="flex flex-col items-center justify-center common-bg text-ivory font-bold text-5xl font-noto-sans-thai">
            {id}
        </div>
        } />
    </Routes>
  )
}

export default Tree;