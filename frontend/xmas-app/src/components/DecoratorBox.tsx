import { useNavigate  } from "react-router-dom";
import { ITEMNAME } from "../ITEMNAME";

const DecoratorBox = ({typeNumber, selecting}) => {
    const navigate = useNavigate();
    function handleSelect () {
        return navigate(`?page=-1&item=${typeNumber}`);
    }

    return <>
        <div onClick={handleSelect} className={`transition-all rounded-[7.5px] w-[85px] h-[85px] decorator-box flex justify-center ${typeNumber === selecting ? "border-white border-[3px] border-spacing-[5px]": ""} items-center`}>
            <img className="h-[70px]" src={`/src/assets/onTree/${ITEMNAME[typeNumber]}.svg`}></img>
        </div>
    </>;
}

export default DecoratorBox;