import { useState, useEffect } from "react";

const CopyLinkBar = () => {
    const textToCopy = 'https://xmas.tucm.cc/t/ilovetucmc'; //replace with API data
    const [copyStatus, setCopyStatus] = useState('');

    const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus('success');
      setPopUp(true);
      setTimeout(() => setCopyStatus(''), 2000); // Clear message after 2 seconds
    } catch (err) {
      setCopyStatus('failed');
    }
  };

    const [isExtend, setExtend] = useState(false);
    const [isPopUp, setPopUp] = useState(false);
    function UpdateBar() {
        !isExtend && setExtend(true);
    };
    let timer
    useEffect(() => {
       function resetBlob() {
        setPopUp(false);
        clearTimeout(timer);
    } 

    if (isPopUp) {
      timer = setTimeout(() => {
      }, 3000);
      
      return () => resetBlob;
    }
    }, [isPopUp]);

    return <>
    <div className="flex w-full justify-center">
        <div className={`text-[13px] font-inter bottom-[100px] text-white absolute z-[800] px-3 py-2 rounded-full 
        ${isPopUp ? "anim-intro-easeIn" : ""}`} 
        style={{
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                backdropFilter: "blur(2px)",
                visibility: (isPopUp ? "visible" : "hidden"),
                }}>Link Copied!</div>
        <div onClick={UpdateBar} className="transition-all bottom-[40px] absolute grad-commonred z-[900] text-white font-bold p-3 text-center rounded-full" style={{
            width: (!isExtend ? "200px" : "320px"),
            fontSize: (!isExtend ? "20px" : "15px"),
        }}>
            <div className="flex flex-row justify-evenly">
                <p>{ !isExtend ? "Copy Link" : "https://xmas.tucm.cc/t/ilovetucmc" }</p> {/** FIX THE LINK LATER */}
                <button onClick={handleCopy}><img className="w-[20px]" src="/src/assets/copyTab.svg"></img></button>
                </div>
            </div>
    </div>
    </>;

}

export default CopyLinkBar;