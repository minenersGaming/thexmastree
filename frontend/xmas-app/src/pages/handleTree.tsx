import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Tree from "./DecorTree.tsx";
import Background from "./Background.tsx";


//dummy data, replace with API data later
export const TREEDATA = {
  "id": "7uCMc",
  "background": 1,
  "elements": [
    {
      "page": 1,
      "position": 1,
      "type": 1,
      "sender": "Anusorn",
      "message": "Merry Christmas!"
    },
    {
      "page": 2,
      "position": 1,
      "type": 2,
      "sender": "TUSC",
      "message": "Merry Xmas!"
    }
  ]
};


const HandleTree = () => {
    const {id} = useParams();
    if (id === "dummy") { //for testing, delete later
        return (
            <div className="flex flex-col items-center justify-center common-bg text-ivory font-bold text-5xl font-noto-sans-thai">
              test
            </div>
        )
    } else {
        return (
          <Routes>
              <Route path="*" element={
                <>
                <div className="common-bg absolute top-0 left-0 w-full h-full z-0">
                  <Background var={TREEDATA.background} />
                  <Tree treeData={TREEDATA} />
                  </div>
                </>
              } />
          </Routes>
        )
    }
}

export default HandleTree;