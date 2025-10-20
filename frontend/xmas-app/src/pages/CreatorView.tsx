import Background from "../components/Background.tsx";
import CopyLinkBar from "../components/CopyLinkBar.tsx";
import Tree from "../components/Tree.tsx";
import { SAMPLEDATA } from "../SAMPLEDATA.tsx"; //wait for API

const CreatorView = ( {id:string} ) => {
    //fetch API something here
    const receivedData = SAMPLEDATA; //wait for API

    return <>
    <div className="common-bg">
        <Background var={receivedData.background}/> {/**wait for API*/}
        <div className="absolute z-[700] flex w-full justify-center top-[30px]">
            <div className="flex flex-col text-center">
                <div className="align-top text-white">
                    <span className="text-bold font-milonga text-[35px]">{receivedData.name}</span>
                    <span className="font-milonga text-[25px] pl-[5px]">'s</span>
                </div>
                <div className="text-white text-[20px] font-milonga mt-[-8px]">
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