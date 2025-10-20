import { useState } from "react";

const { isOpen, setIsOpen } = useState(true);

const Modal = () => {
    return (<>
    {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-200">
            <div className="bg-white p-6 rounded-lg shadow-lg">

            </div>
        </div>) }
    </>);
}

export default Modal;