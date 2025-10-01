const Home = () => {
  return <>
  <div className="flex flex-col">
    <div style={{
      background: "rgba(0, 28, 29, 1)",
      height: "8vh",
    }} className="flex bg-black p-3 items-center">
      <img src="src/assets/logo.svg" style={{height: "38px"}} className="px-3"></img>
      </div>

      <div className="items-center flex-col justify-center"
        style={{
          width: "100vw",
          height: "92vh",
          overflow: "hidden",
          background: "radial-gradient(circle, rgba(0,113,105,0.8) 0%, rgba(1,46,52,0.9) 100%)",
          position: "relative",
      }}
      >
          <div className="flex items-center justify-center"><img src="src/assets/titletext.svg" className="pt-6" id="text"></img>

            {
            /**<style>{`
              
              #text {
                scale: 3;
                padding-top: 7rem;
                }

              @media (max-width: 1024px) {
                #text {
                scale: 3;
                padding-top: 6rem;
                }
              }
              @media (max-width: 1440px) {
                #text {
                  scale: 1.2;
                padding-top: 6rem;
                }
              }

              @media (max-width: 768px) {
                #text {
                  scale: 1;
                padding-top: 6rem;
                }
              }

              @media (max-width: 426px) {
                #text {
                  scale: 1;
                padding-top: 6rem;
                }
              }

              @media (max-width: 376px) {
                #text {
                  scale: 0.9;
                padding-top: 6rem;
                }
              }

              @media (max-width: 321px) {
                #text {
                  scale: 0.9;
                padding-top: 6rem;
                }
              }
            `}</style>
            */  }
            </div>

          <div className="flex justify-center"><img src="src/assets/titletree.svg" id="tree" style={{
              position: "absolute",
              bottom: "0",
              //top: "50%",
              //left: "50%",
              //transform: "translate(-50%, -50%)",
              width: "600px",
              //height: "600px",
              //scale: "4"
            }} className="pt-2"></img>
            <style>{`
              
              #tree {
                height: 900px;
                scale: 5;
                }

              @media (max-width: 2559px) {
                #tree {
                  height: 600px;
                  scale: 3;
                }
              }

              @media (max-width: 1024px) {
                #tree {
                height: 700px;
                scale: 3;
                }
              }
              @media (max-width: 1439px) {
                #tree {
                  height: 600px;
                  scale: 2.5;
                }
              }

              @media (max-width: 768px) {
                #tree {
                  height: 700px;
                  scale: 2.5;
                }
              }

              @media (max-width: 426px) {
                #tree {
                  height: 450px;
                  scale: 2.75;
                }
              }

              @media (max-width: 376px) {
                #tree {
                  height: 400px;
                  scale: 3;
                }
              }

              @media (max-width: 321px) {
                #tree {
                  height: 400px;
                  scale: 3.5;
                }
              }
            `}</style>
        </div>
      </div>
    </div>

    <div style={{transform:"translate(0%, -200%)"}} className="flex justify-center items-center">
      <button style={{
        background: "linear-gradient(260deg, rgba(201, 84, 51, 1) 0%, rgba(201, 51, 60, 1) 50%, rgba(144, 30, 37, 1) 100%)",
        textAlign: "center",
        textShadow: "0 0.899px 1.617px rgba(0, 0, 0, 0.25)",
        fontFamily: 'Inter, sans-serif',
        fontSize: "18.788px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        width: "300px",
          }}
      className=" p-3 rounded-full font-bold text-xl text-white text-shadow-xl hover:shadow-2xl shadow-black transition-all">
        <span className="flex">
          <img src="src/assets/g-icon.svg" className="p-2 pl-3"></img>
          <span className="pt-2">SIGN UP WITH GOOGLE</span>
        </span>
          </button>
    </div>

    
  </>
};

export default Home;