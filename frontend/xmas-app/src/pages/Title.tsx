/**
== CHECK LIST ==
[/] Title
[/] Background
[X] Preview
[X] Creator View
[X] Decorate + Self Preview
[X] Visitor View
[X] Gift Received
[/] Error
 */
"use client";
import { GoogleSignInButton } from "../components/GoogleSignInButton";
import { Landing } from "../landing";

const Home = () => {
  return (
    <>
      <div className="items-center flex-col justify-center" id="common-bg">
        <div className="w-auto h-auto pt-5 flex items-center justify-center">

    <div className="items-center flex-col justify-center" id="common-bg"
      >
    <div className="w-auto h-auto pt-5 flex items-center justify-center">
      <div className="anim-intro-fadeIn">
        <img draggable="false" src="src/assets/titletext.svg" style={{
            maxHeight: "16vh",
        }}></img>
        <div>
            <img draggable="false" className="bottom absolute w-auto" id="text" src="src/assets/titletree.svg" style={{
                left: "50%",
            }}></img>
            <style>{`
            #text {
                max-height: 60%;
                scale: 1.9;
                transform: translateX(-26.5%);
            }
                @media (max-width: 768px) {
                  #text {
                    max-height: 37%;
                    scale: 4.5;
                    transform: translate(-11.2%,-25%);
                  }
                }
                @media (max-width: 320px) {
                  #text {
                    max-height: 36%;
                    scale: 3.8;
                    transform: translate(-13%,-22%);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>

        <div
          style={{
            bottom: "15%",
            left: "50%",
            transform: "translate(-50%, 110%)",
            zIndex: 20,
          }}
          className="absolute flex justify-center items-center"
        >
          
          <Landing/>
        </div>
      </div>
    </>
  );
};

export default Home;
