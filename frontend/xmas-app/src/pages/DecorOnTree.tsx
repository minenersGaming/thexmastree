const MARGINTOP = ["-220px","-150px","-50px","50px","130px","50px","250px","180px","260px"]
const MARGINLEFT = ["-40px","100px","-20px","-140px","-10px","170px","-170px","90px","220px"]
const ROTATION = ["10deg","-15deg","5deg","10deg","5deg","-10deg","15deg","-5deg","-15deg"]
const NAME = ["yellow","red","tuball","socks","cane","twobells"]


type DecorOnTreeProps = {
    position: number;
    type: number;
    display?: boolean;
    sender?: string;
    message?: string;
};

const DecorOnTree = ( {position, type, display, sender, message }: DecorOnTreeProps ) => {
    if (display) {
        return (<>

        <img src={`/src/assets/onTree/${NAME[type]}.svg`} className="absolute w-[55px] pointer-events-none z-[55]" style={{
            marginTop: MARGINTOP[position],
            marginLeft: MARGINLEFT[position],
            transform: `rotate(${ROTATION[position]})`,
          }}></img>

          
        </>);
    } else {
    return (<></>
        )
    }
};

export default DecorOnTree;