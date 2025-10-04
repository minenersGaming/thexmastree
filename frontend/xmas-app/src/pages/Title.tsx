const Home = () => {
  return <>

    <div className="items-center flex-col justify-center"
        style={{
          width: "100vw",
          height: "92vh",
          overflow: "hidden",
          background: "radial-gradient(circle, rgba(0,113,105,0.8) 0%, rgba(1,46,52,0.9) 100%)",
          position: "relative",
      }}
      >
    <div className="pt-5 flex items-center justify-center" style={{
        width: "auto",
        height: "auto",
    }}>
      <div>
        <img draggable="false" src="src/assets/titletext.svg" style={{
            maxHeight: "16vh",
        }}></img>
        <div>
            <img draggable="false" id="text" src="src/assets/titletree.svg" style={{
                bottom: "0",
                left: "50%",
                position: "absolute",
                width: "auto",
            }}></img>
            <style>{`
            #text {
                max-height: 60%;
                scale: 1.9;
                transform: translateX(-26.5%);
            }
                @media (max-width: 768px) {
                    #text {
                        max-height: 36%;
                        scale: 3;
                        transform: translate(-16%,-10%);
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

    <div style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translate(-50%, 110%)",
          zIndex: 20
        }} className="flex justify-center items-center">
          <button style={{
            background: "linear-gradient(260deg, rgba(201, 84, 51, 1) 0%, rgba(201, 51, 60, 1) 50%, rgba(144, 30, 37, 1) 100%)",
            textAlign: "center",
            textShadow: "0 0.899px 1.617px rgba(0, 0, 0, 0.25)",
            fontFamily: 'Inter, sans-serif',
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            width: "270px",
              }}
          className="p-2 rounded-full font-bold text-xl text-white text-shadow-xl hover:shadow-2xl shadow-black transition-all">
            <span className="flex">
              <img draggable="false" src="src/assets/g-icon.svg" className="p-2 pl-3"></img>
              <span className="pt-2">SIGN UP WITH GOOGLE</span>
            </span>
              </button>
        </div>

    </div>
  </>};

export default Home;