import Background from "../components/Background.tsx";
import CopyLinkBar from "../components/CopyLinkBar.tsx";
import Tree from "../components/Tree.tsx";
import { SAMPLEDATA } from "../SAMPLEDATA.tsx"; //wait for API

const CreatorView = ( {id:string} ) => {
    //fetch API every ... ms: something here
    const receivedData = SAMPLEDATA; //wait for API

    return <>
    <div className="common-bg">
        <Background var={receivedData.background}/> {/**wait for API*/}
        <div className="absolute z-[50] flex w-full justify-center top-[20px] anim-intro-fadeIn">
            <div className="flex flex-col text-center">
                <div className="align-top">
                    <span className="text-white font-bold font-inter-noto text-[42px]">{receivedData.name}</span>
                    <span className="text-white font-milonga text-[25px] pl-[5px]">‘s</span>
                </div>
                <div className="text-white text-[25px] font-milonga mt-[-8px]">
                    <span>Christmas Tree</span>
                </div>
            </div>
        </div>
        <Tree treeData={receivedData.elements} displayMessage={true}/>
        <CopyLinkBar />
    </div>
    </>
}

export default CreatorView;