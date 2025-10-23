import DecorOnTree from "./DecorOnTree.tsx";
import { useState } from "react";

const blankFiller = {
  page: -1,
  position: -1,
  type: -1,
  sender: "",
  message: "",
}

type TreeElement = {
  page: number;
  position: number;
  type: number;
  sender: string;
  message: string;
};

type TreeProps = {
  treeData: TreeElement[];
  displayMessage: boolean;
  animFadeIn?: boolean;
};

const Tree = ({ treeData, displayMessage, animFadeIn }: TreeProps) => {
  const pageElementsList = [
    treeData.find((item) => item.position === 0) ?? blankFiller,
    treeData.find((item) => item.position === 1) ?? blankFiller,
    treeData.find((item) => item.position === 2) ?? blankFiller,
    treeData.find((item) => item.position === 3) ?? blankFiller,
    treeData.find((item) => item.position === 4) ?? blankFiller,
    treeData.find((item) => item.position === 5) ?? blankFiller,
    treeData.find((item) => item.position === 6) ?? blankFiller,
    treeData.find((item) => item.position === 7) ?? blankFiller,
    treeData.find((item) => item.position === 8) ?? blankFiller,
  ] //there is more optimal way to do this but I don't understand it

  return (<>

    <div> {/** 362px mt-[-1vh] */}
      <div draggable="false" className={`flex z-[50] w-full justify-center items-center absolute top-0 left-0 h-full ${animFadeIn ? "anim-intro-fadeIn" : ""}`}>
        <img draggable="false" src="/src/assets/tree.svg" className="min-w-[362px] w-[362px] h-auto mt-[-1vh] z-[50] overflow-visible"></img>

      <DecorOnTree position={pageElementsList[0].position} type={pageElementsList[0].type} display={true} displayMessage={displayMessage} sender={pageElementsList[0].sender} message={pageElementsList[0].message}/>
      <DecorOnTree position={pageElementsList[1].position} type={pageElementsList[1].type} display={true} displayMessage={displayMessage} sender={pageElementsList[1].sender} message={pageElementsList[1].message}/>
      <DecorOnTree position={pageElementsList[2].position} type={pageElementsList[2].type} display={true} displayMessage={displayMessage} sender={pageElementsList[2].sender} message={pageElementsList[2].message}/>
      <DecorOnTree position={pageElementsList[3].position} type={pageElementsList[3].type} display={true} displayMessage={displayMessage} sender={pageElementsList[3].sender} message={pageElementsList[3].message}/>
      <DecorOnTree position={pageElementsList[4].position} type={pageElementsList[4].type} display={true} displayMessage={displayMessage} sender={pageElementsList[4].sender} message={pageElementsList[4].message}/>
      <DecorOnTree position={pageElementsList[5].position} type={pageElementsList[5].type} display={true} displayMessage={displayMessage} sender={pageElementsList[5].sender} message={pageElementsList[5].message}/>
      <DecorOnTree position={pageElementsList[6].position} type={pageElementsList[6].type} display={true} displayMessage={displayMessage} sender={pageElementsList[6].sender} message={pageElementsList[6].message}/>
      <DecorOnTree position={pageElementsList[7].position} type={pageElementsList[7].type} display={true} displayMessage={displayMessage} sender={pageElementsList[7].sender} message={pageElementsList[7].message}/>
      <DecorOnTree position={pageElementsList[8].position} type={pageElementsList[8].type} display={true} displayMessage={displayMessage} sender={pageElementsList[8].sender} message={pageElementsList[8].message}/>
      
      </div>
    </div>

        
    </>
      );
}

export type { TreeProps };
export default Tree;
