import { useParams } from "react-router-dom";
import New from "./New.tsx";
import CreatorView from "./CreatorView.tsx";
import { SAMPLEDATA } from "../SAMPLEDATA.tsx"; //wait for API


const HandleCreate = () => {
  const {id} = useParams();
  if (id === "new") {
    return <New />
  } else {
  return <CreatorView id={"tucmc"} />
  };
}

export default HandleCreate;
