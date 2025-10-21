import { useState } from "react";


const Facade = ({returnedClosed, isOpen}) => {

    function handleClose () {
        returnedClosed(false);
    }

    return <><div className={` ${isOpen ? "visible z-[-9000]" : "invisible z-[-9000]"}`}>
        <div className="flex flex-col">
          <button onClick={handleClose}></button>
        </div>
      </div></>;
}

export default Facade;