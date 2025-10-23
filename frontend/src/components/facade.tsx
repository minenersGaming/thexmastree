import { useState } from "react";

type inputType = {
    returnedClosed: CallableFunction,
    isOpen: boolean,
    sender: string,
    message: string,
}

const Facade = ({returnedClosed, isOpen, sender, message} : inputType ) => {

    function handleClose () {
        returnedClosed(false);
    }

    return <>
    {isOpen ? 
    <div className="absolute visible z-[9995] facade anim-intro-fadeInFast">
        <div className="flex flex-col justify-center">
            <div className="grad-commonred text-ivory mb-5 font-inter-noto font-bold py-2 rounded-full">From {sender}</div>
            <div className="flex justify-center grad-intro-box rounded-[12px] w-[284px] h-[267px]">
                <div className="absolute text-ivory text-wrap w-[284px] max-h-[267px] overflow-scroll px-[32px] py-[15px] font-inter-noto text-left scroll-skyintro">
                    {message}
                </div>
                <div className="absolute w-[284px] h-8"></div> {/** ADD BLUR FOR TEXT : DIDNT FINISH */}
            </div>
            <div className="flex flex-row justify-center pt-[20px]">
                <button onClick={handleClose} className="font-inter font-bold grad-commonred rounded-full p-2 w-[125px]">BACK</button>
            </div>
        </div>
      </div>: <></>}
    </>;
}

export default Facade;