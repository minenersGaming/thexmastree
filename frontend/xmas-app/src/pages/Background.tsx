const BACKGROUND = ["60thbldg", "55thbldg"];

/** !!!!! TEMPORARY FOR PRE-DEV (caused by inconsistency in media dimensions) !!!!! */
const WIDTH = ["790px", "540px"]
const HEIGHT = ["auto", "190px"]
const TRANS_X = ["-21%", "-5%"]
const TRANS_Y = ["-8vh", "-9vh"]

const MOON_X = ["55%", "-35%"]
const MOON_Y = ["5%", "-18%"]

const Background = ({ var: bgIndex }: { var: number }) => {
    const bgCurrent  = BACKGROUND[bgIndex];
    const bgCurrentWidth = WIDTH[bgIndex];
    const bgCurrentHeight = HEIGHT[bgIndex];
    const bgCurrentTransX = TRANS_X[bgIndex];
    const bgCurrentTransY = TRANS_Y[bgIndex];
    const moonX = MOON_X[bgIndex];
    const moonY = MOON_Y[bgIndex];

    return <>
        <img draggable="false" className="overflow-visible absolute z-[5] max-w-[none] object-cover" src={`/src/assets/background/${bgCurrent}.svg`} style={{
            width: bgCurrentWidth,
            height: bgCurrentHeight,
            transform: `translate(${bgCurrentTransX}, ${bgCurrentTransY})`,
        }}></img>

    
            <img className="fixed z-[1] transition-all" style={{
            top: moonY,
            left: moonX,
        }}
            src="/src/assets/moon.svg"></img>
            </>
}

export default Background;