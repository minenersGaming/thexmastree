// น่าจะมีไฟล์แยก? 
const BACKGROUND = ["60thbldg", "55thbldg"];

/** !!!!! TEMPORARY FOR PRE-REL. SESSION !!!!! */
const WIDTH = ["790px", "500px"]
//const HEIGHT = ["auto", "auto"]

const MOON_X = ["55vw", "-140px"];
const MOON_Y = ["5vh", "-140px"];

const Background = ({ var: bgIndex }: { var: number }) => {
  const bgCurrentWidth = WIDTH[bgIndex];
  // const bgCurrentHeight = HEIGHT[bgIndex];
  const bgCurrent = BACKGROUND[bgIndex];
  const moonX = MOON_X[bgIndex];
  const moonY = MOON_Y[bgIndex];

  return (
    <>
      <div className="fixed bottom-0 z-[4] flex flex-col items-end w-full pointer-events-none">

        <img
          draggable="false"
          className="relative z-[3] max-w-[none] overflow-visible"
          src={`/src/assets/background/${bgCurrent}.svg`}
          style={{
            width: bgCurrentWidth,
            height: "auto",
          }}
        />

        <div className="bg-white z-[2] w-full h-[26vh]"></div>
      </div>

      <img
        className="fixed z-[1] transition-all"
        style={{
          top: moonY,
          left: moonX,
        }}
        src="/src/assets/moon.svg"
      />
    </>
  );
};

export default Background;
