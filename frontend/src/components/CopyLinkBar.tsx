import { useState } from "react";

const CopyLinkBar = ( {id}:{id:string} ) => {
    const textToCopy = String(`https://xmas.tucm.cc/t/${id}`);
    const [copyStatus, setCopyStatus] = useState('');

    const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus('success');
      setPopUp(true);
      setTimeout(() => setCopyStatus(''), 4000);
      setTimeout(() => setPopUp(false), 4900);
      
    } catch (err) {
      setCopyStatus('failed');
    }
  };

    const [isExtend, setExtend] = useState(false);
    const [isPopUp, setPopUp] = useState(false);
    function UpdateBar() {
        !isExtend && setExtend(true);
    }

    return <>
    <div className=" z-[100] flex w-full justify-center">
        <div className={`text-[13px] font-inter bottom-[100px] text-white absolute z-[60] px-3 py-2 rounded-full 
        ${copyStatus === "success" ? "anim-intro-easeIn visible" : ( copyStatus === '' && isPopUp ? "anim-outro-easeOut" : "invisible")}`} 
        style={{
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                backdropFilter: "blur(2px)",
                }}>Link Copied!</div>
        <div onClick={UpdateBar} className="transition-all bottom-[40px] absolute grad-commonred z-[50] text-white font-bold p-3 text-center rounded-full" style={{
            width: (!isExtend ? "200px" : "320px"),
            fontSize: (!isExtend ? "20px" : "15px"),
        }}>
            <div className="flex flex-row justify-evenly">
                <p>{ !isExtend ? "Copy Link" : "https://xmas.tucm.cc/t/ilovetucmc" }</p> {/** FIX THE LINK LATER */}
                <button onClick={handleCopy}><img className="w-[20px]" src="/src/assets/icon/copyTabWhite.svg"></img></button>
                </div>
            </div>
    </div>
    </>;

}

export default CopyLinkBar;