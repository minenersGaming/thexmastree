import { useParams, useSearchParams } from "react-router-dom";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Tree from "../components/Tree.tsx";
import Background from "../components/Background.tsx";
import TreeAtDecor from "../components/TreeAtDecor.tsx";
import DecoratorBox from "../components/DecoratorBox.tsx";
import { SAMPLEDATA } from "../SAMPLEDATA.tsx";
import DecorOnTree from "../components/DecorOnTree.tsx";


const HandleTree = () => {
    const {id} = useParams(); //for API
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    //fetch API something here
    const receivedData = SAMPLEDATA; //WAIT FOR API

    if (!searchParams.get("page")) {
      return <Navigate to="?page=0" replace />;
    }

    const page = searchParams.get("page");
    const pageNumber = page ? Number(page): 1;

    if (!searchParams.get("item") && pageNumber === -1) {
          return <Navigate to="?page=-1&item=0" replace />;
    }

    const item = searchParams.get("item");
    const itemNumber = item ? Number(item): 0;
    const pageElements = receivedData.elements.filter(e => e.page === (pageNumber <= 0 ? 1 : pageNumber));


    function toNextPg () {
      setSearchParams({ "page": "-2", "item": String(item) });
    }

    function nextPg () {
      setSearchParams({ "page": String(pageNumber + 1) });
    }

    function prevPg () {
      setSearchParams({ "page": String(pageNumber - 1) });
    }

    if (pageNumber === undefined || pageNumber <= 0) {
      if (pageNumber === 0) {  //PAGE 0: INTRO TO VIEWER
        return (<>
                <div className="common-bg absolute top-0 left-0 w-full h-full z-0">
                <span className="anim-intro-fadeIn ">
                  <TreeAtDecor pageElements={pageElements} receivedData={receivedData} />
                  <div className="w-full absolute flex flex-row justify-center">
                    <a href="?page=-1" className="bottom-[-85vh] font-inter font-bold text-[20px] py-3 absolute z-[300] w-[200px] text-center grad-commonred text-white rounded-full self-center">DECORATE!</a>
                      <a href="/" className="absolute bottom-[-90vh] grad-commonred text-grad-effect font-bold italic z-[300] text-center underline decoration-[#901E25]">
                        CREATE YOUR OWN!
                        </a>
                    </div>
                    </span>
                  </div>
                </>);
        } else if (pageNumber == -1) { //PAGE -1: CHOOSE DECORATION
        return <>
        <div className="common-bg absolute top-0 left-0 w-full h-full z-0">
                  <span className="anim-intro-fadeIn ">
                    <Background var={receivedData.background} />
                    <Tree treeData={pageElements} displayMessage={false} />
                    <div className="flex justify-center absolute w-full bottom-[380px] z-[5500]">
                      <div className="absolute flex flex-col w-[300px] h-[350px] rounded-[30px]" style={{
                        backgroundColor: "rgba(0, 0, 0, 0.32)",
                        backdropFilter: "blur(5px)",
                      }}>
                        <div className="flex justify-center flex-col grad-commonred rounded-t-[30px] w-[300px] h-[47px]">{/**red bar at the top */}
                          <span className="font-inter italic text-[22px] ml-[15px] text-white">Choose your item</span>
                        </div>
                        <div className="flex flex-col justify-center h-[200px] mt-[10px] overflow-y-scroll scroll-decorator">
                          
                            <div className="flex flex-row justify-evenly">
                              <DecoratorBox typeNumber={0} selecting={itemNumber}/>
                              <DecoratorBox typeNumber={1} selecting={itemNumber}/>
                              <DecoratorBox typeNumber={2} selecting={itemNumber}/>
                            </div>
                            <div className="flex flex-row mt-[10px] justify-evenly">
                              <DecoratorBox typeNumber={3} selecting={itemNumber}/>
                              <DecoratorBox typeNumber={4} selecting={itemNumber}/>
                              <DecoratorBox typeNumber={5} selecting={itemNumber}/>
                            </div>
                          </div>
                          <div className="flex justify-end p-[10px]" onClick={toNextPg}>
                            <div className="flex flex-row items-center grad-commonred w-[125px] h-[41px] rounded-[20px] justify-center">
                              <p className="font-inter text-white">NEXT</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none"><path d="M7.125 4.375L12.6667 10.5L7.125 16.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              </div>
                            </div>
                        <div>
                      </div>
                    </div>
                    </div>
                  </span>
        </div>
        </>
      } else {}
    }  else {
        return (
          <Routes>
              <Route path="*" element={
                <>
                <div className="common-bg absolute top-0 left-0 w-full h-full">
                  <Background var={receivedData.background} />
                  <Tree treeData={pageElements} displayMessage={false} />
                  <div className="absolute flex flex-row items-center h-full w-full justify-between px-[20px] z-[200]"> {/** NEED TO REFINE WITH GRAPHIC */}
                    <button  onClick={prevPg} className={`${pageNumber === 1 ? "invisible" : "visible"}`}><img src="/src/assets/whiteArrow.svg"></img></button>
                    <button  onClick={nextPg} className={`scale-x-[-1] ${pageNumber === 0 ? "invisible" : "visible"}`}><img src="/src/assets/whiteArrow.svg"></img></button>
                  </div>
                  </div>
                </>
              } />
          </Routes>
        )
    }
}

export default HandleTree;