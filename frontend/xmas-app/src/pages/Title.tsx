const Home = () => {
  return <>
    <div
      style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      background: "radial-gradient(circle,rgba(255, 204, 241, 1) 0%, rgba(255, 112, 203, 1) 100%)",
      position: "relative",
    }}
    >
      <img
        src="public/tucmclogo.png" // make sure it's in public folder
        alt="DVD Logo"
        style={{
          position: "absolute",
          width: "150px",
          animation: "dvdX 4s linear infinite alternate, dvdY 3s linear infinite alternate",
        }}
      />

      <style>
        {`
          @keyframes dvdX {
            0%   { left: 0; }
            100% { left: calc(100vw - 150px); }
          }

          @keyframes dvdY {
            0%   { top: 0; }
            100% { top: calc(100vh - 150px); }
          }
        `}
      </style>
    </div>
  </>;
};

export default Home;