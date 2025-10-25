const Header = () => {
    return (<>
        <div style={{
            background: "rgba(0, 28, 29, 1)",
            height: "6vh",
        }} className="flex min-h-[40px] p-3 items-center z-[6969]" id="main-header">
            <img draggable="false" src="/logo.svg" style={{ height: "3vh", minHeight: "20px", maxHeight: "23px" }} className="pl-[10px]"></img>
        </div>
    </>);
}

export default Header;