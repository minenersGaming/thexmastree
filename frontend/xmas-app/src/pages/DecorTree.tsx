import DecorOnTree from "./DecorOnTree";

type TreeProps = {
  treeData: {
    id: string;
    background: number;
    elements: {
      page: number;
      position: number;
      type: number;
      sender: string;
      message: string;
    }[];
  };
};

const Tree = ({ treeData }: TreeProps) => {
    return (<>
    <div>
      <div className="flex z-[50] w-full justify-center items-center absolute top-0 left-0 h-full pointer-events-none">
        <img src="/src/assets/tree.svg" className="min-w-[362px] w-[362px] h-auto mt-[5vh] z-[50] pointer-events-none overflow-visible"></img>

      <DecorOnTree position={0} type={2} />
      <DecorOnTree position={1} type={0} />
      <DecorOnTree position={2} type={1} />
      <DecorOnTree position={3} type={2} />
      <DecorOnTree position={4} type={3} />
      <DecorOnTree position={5} type={4} />
      <DecorOnTree position={6} type={5} />
      <DecorOnTree position={7} type={0} />
      <DecorOnTree position={8} type={1} />
      
      </div>
    </div>

        
    </>
    /**<div className="flex flex-col items-center justify-center common-bg text-ivory font-bold text-5xl font-noto-sans-thai w-[95vw]">
          {JSON.stringify(treeData.elements[1].sender)}
        </div>*/
      )
}

export type { TreeProps };
export default Tree;
