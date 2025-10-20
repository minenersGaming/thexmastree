import { useParams, useSearchParams } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Tree from "../components/Tree.tsx";
import Background from "../components/Background.tsx";
import { SAMPLEDATA } from "../SAMPLEDATA.tsx";


const HandleTree = () => {
    const {id} = useParams();
    const [searchParams] = useSearchParams();

    if (!searchParams.get("page")) {
      return <Navigate to="?page=0" replace />;
}
    const page = searchParams.get("page");
    const pageNumber = page ? Number(page): undefined;
    const pageElements = SAMPLEDATA.elements.filter(e => e.page === (pageNumber === 0 ? 1 : pageNumber));

    if (pageNumber === undefined || pageNumber < 1) {
      if (pageNumber === 0) {  //PAGE 0: INTRO TO VIEWER
        return (<>
                <div className="common-bg absolute top-0 left-0 w-full h-full z-0">
                  <span className="anim-intro-fadeIn ">
                  <Background var={SAMPLEDATA.background} />
                  <Tree treeData={pageElements} displayMessage={true} />
                  <div className="w-full absolute flex flex-row justify-center">
                    <a href="?page=-1" className="bottom-[-85vh] font-inter font-bold text-[20px] py-3 absolute z-[300] w-[200px] text-center grad-commonred text-white rounded-full self-center">DECORATE!</a>
                      <a href="/create" className="absolute bottom-[-90vh] grad-commonred text-grad-effect font-bold italic z-[300] text-center underline decoration-[#901E25]">
                        CREATE YOUR OWN!
                        </a>
                    </div>
                    </span>
                  </div>
                </>);
       }
    } else {
        return (
          <Routes>
              <Route path="*" element={
                <>
                <div className="common-bg absolute top-0 left-0 w-full h-full z-0">
                  <Background var={SAMPLEDATA.background} />
                  <Tree treeData={pageElements} displayMessage={false} />
                  </div>
                </>
              } />
          </Routes>
        )
    }
}

export default HandleTree;