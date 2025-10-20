import { useState } from "react";

const CopyLinkBar = () => {
    const [isExtend, setExtend] = useState(false);
    const [isPopUp, setPopUp] = useState(false);
    function UpdateBar() {
        !isExtend && setExtend(true);
    };

    return <>
    <div className="flex w-full justify-center">
        <div onClick={UpdateBar} className="transition-all bottom-[40px] absolute grad-commonred z-[900] text-white font-bold p-3 text-center rounded-full" style={{
            width: (!isExtend ? "200px" : "290px"),
            fontSize: (!isExtend ? "20px" : "15px"),
        }}>
            <div className="flex flex-row justify-evenly">
                <p>{ !isExtend ? "Copy Link" : "https://tucm.cc/t/ilovetucmc" }</p> {/** FIX THE LINK LATER */}
                <img className="w-[20px]" src="/src/assets/copyTab.svg"></img></div>
            </div>
    </div>
    </>;

}

export default CopyLinkBar;