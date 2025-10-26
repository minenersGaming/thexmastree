import Background from "../components/Background.tsx";
import { useState } from "react";
//import { SAMPLEDATA } from "../SAMPLEDATA.tsx"; //wait for api
import { auth } from "../firebase.ts";
import { useNavigate } from "react-router-dom";

/** น่าจะมีไฟล์แยก? */
const BACKGROUND_NAME = ["60TH YEAR BLD.", "55TH YEAR BLD."];

const New = () => {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);

  const prevBg = () => {
    setBgIndex((prev) => (prev === 0 ? BACKGROUND_NAME.length - 1 : prev - 1));
  };

  const nextBg = () => {
    setBgIndex((prev) => (prev + 1) % BACKGROUND_NAME.length);
  };

  const bgCurrentName = BACKGROUND_NAME[bgIndex];
  //const creatorName = SAMPLEDATA.name; //WAIT FOR API

  const handleCreate = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const idToken = await user.getIdToken(); // Firebase ID token
    console.log("User ID token:", idToken);
    /*const check = await fetch("/api/user/check", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: idToken, // if you use it in req.email
      },
    });
    const checkData = await check.json();
    if (checkData.id !== null) {
      navigate(`/create/${checkData.id}`);
      return;
    }*/
    const response = await fetch("/api/user/createTree", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: idToken, // if you use it in req.email
      },
      body: JSON.stringify({
        bg: bgIndex, // send the selected background index
      }),
    });

    const data = await response.json();
    console.log(data); // unique user ID
    navigate(`/create/${data.id}`);
  };

  return (
    <>
      <div
        id="common-bg"
        className="fixed flex flex-col justify-center items-center bottom"
        style={{ overflow: "hidden", width: "auto" }}
      >
        <Background var={bgIndex} />

        <div
          draggable="false"
          className="flex justify-center fixed z-20 w-[100vw] max-w-[320px] bottom-[20vh]"
        >
          <img draggable="false" src="/assets/tree.svg"></img>
        </div>
        <div className="fixed bottom left-0 z-30 w-[100vw] h-[92vh]">
          <div className="flex flex-col justify-between h-full">
            <div className="anim-intro-fadeIn z-[80] flex items-center justify-around flex-col">
              <span className="text-grad-effect grad-intro italic font-inter">
                choose your
              </span>
              <span className="text-grad-effect grad-intro font-bold text-4xl font-inter">
                BACKGROUND
              </span>
            </div>
            <div className="flex flex-col pb-10">
              <div className="z-50 flex flex-row items-center justify-center">
                <button onClick={prevBg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="39"
                    viewBox="0 0 35 39"
                    fill="none"
                  >
                    <path
                      d="M21.875 8.05921L11.6667 19.3421L21.875 30.625"
                      stroke="#C53F39"
                      stroke-width="2.76316"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <span
                  className="font-bold text-3xl text-grad-effect grad-commonred text-center"
                  style={{ width: "260px" }}
                >
                  {bgCurrentName}
                </span>

                <button onClick={nextBg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="39"
                    viewBox="0 0 35 39"
                    fill="none"
                  >
                    <path
                      d="M13.125 8.05921L23.3333 19.3421L13.125 30.625"
                      stroke="#C53F39"
                      stroke-width="2.76316"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center p-2">
                <button
                  onClick={handleCreate}
                  className="grad-commonred p-3 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  <div className="flex flex-row items-center jusitfy-between">
                    <span className="text-white font-inter pl-1">CONFIRM</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M7.15332 4.375L12.695 10.5L7.15332 16.625"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
