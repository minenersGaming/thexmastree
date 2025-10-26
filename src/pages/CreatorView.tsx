import Background from "../components/Background.tsx";
import CopyLinkBar from "../components/CopyLinkBar.tsx";
import Tree from "../components/Tree.tsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./loading.tsx";
//import { SAMPLEDATA } from "../SAMPLEDATA.tsx"; //wait for API

const CreatorView = () => {
  const [receivedData, setReceivedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/tree/element?id=${encodeURIComponent(id)}`
        );
        const data = await response.json();
        setReceivedData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  //fetch API every ... ms: something here
  //const receivedData = SAMPLEDATA; //wait for API
  console.log(id);
  if (loading) return <Loader />;

  return (
    <>
      <div className="common-bg">
        <Background var={receivedData.background} /> {/**wait for API*/}
        <div className="absolute z-[50] flex w-full justify-center top-[20px] anim-intro-fadeIn">
          <div className="flex flex-col text-center">
            <div className="align-top">
              <span className="text-white font-bold font-inter-noto text-[42px]">
                {receivedData.name}
              </span>
              <span className="text-white font-milonga text-[25px] pl-[5px]">
                ‘s
              </span>
            </div>
            <div className="text-white text-[25px] font-milonga mt-[-8px]">
              <span>Christmas Tree</span>
            </div>
          </div>
        </div>
        <Tree treeData={receivedData.elements} displayMessage={true} />
        <CopyLinkBar id={id} />
      </div>
    </>
  );
};

export default CreatorView;
