import Modal from "./Modal.tsx";
import Facade from "./facade.tsx"
import { useState } from "react";

const MARGINTOP = ["-220px","-150px","-50px","50px","130px","50px","250px","180px","260px"]
const MARGINLEFT = ["-40px","100px","-20px","-140px","-10px","170px","-170px","90px","220px"]

const BOXTOP = ["-270px","-220px","-90px","150px","90px","-60px","350px","310px","170px"]
const BOXLEFT = ["-180px","250px","-200px","-240px","70px","270px","-300px","90px","300px"]

const ROTATION = ["10deg","-15deg","5deg","10deg","5deg","-10deg","15deg","-5deg","-15deg"]
const NAME = ["yellow","red","tuball","socks","cane","twobells"]


type DecorOnTreeProps = {
    position: number;
    type: number;
    display?: boolean;
    displayMessage?: boolean;
    sender?: string;
    message?: string;
};

const DecorOnTree = ( {position, type, display, displayMessage, sender, message }: DecorOnTreeProps ) => {
    const [ isClicked, setClicked ] = useState(false);

    const handleClosed = (data) => {
        setClicked(data);
    };

    const handleOpen = () => {
        setClicked(true);
        console.log("opened");
    }

    if (display && position >= 0 && position <= 8) {
        return (<>

        <img onClick={handleOpen} src={`/src/assets/onTree/${NAME[type]}.svg`} className="absolute w-[55px] z-[55] scale-100 hover:scale-110" style={{
            marginTop: MARGINTOP[position],
            marginLeft: MARGINLEFT[position],
            transform: `rotate(${ROTATION[position]})`,
          }}></img>

          {displayMessage && (<div className="text-[15px] absolute z-[70] text-center grad-commonred p-2 rounded-full text-white font-bold font-inter-noto shadow-2xl text-nowrap max-w-[150px] overflow-clip"  style={{
            marginTop: BOXTOP[position],
            marginLeft: BOXLEFT[position],
          }}>{sender}</div>)}

          <Facade returnedClosed={handleClosed} isOpen={isClicked}/>

          
        </>);
    } else {
    return (<></>
        )
    }
};

export default DecorOnTree;