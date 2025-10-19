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

          <div className="items-center flex-col justify-center" id="common-bg">
            <div className="w-auto h-auto pt-5 flex items-center justify-center">
              <div className="anim-intro-fadeIn">
                <img
                  draggable="false"
                  src="src/assets/titletext.svg"
                  className="max-h-[16vh]"
                ></img>
                <div className="transition-all flex justify-center mt-[-110px] 2xl:mt-[-100px] overflow-hidden">
                  <img
                    draggable="false"
                    className="transition-all absolute min-w-[1800px] 2xl:min-w-[2500px]"
                    id="text"
                    src="src/assets/titletree.svg"
                  />
                </div>
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
            <Landing />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
