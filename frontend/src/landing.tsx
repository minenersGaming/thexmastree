import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export function Landing() {
  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:3000/auth/google";
    // "/auth/google": DON'T FORGET TO CHANGE THIS TO RELATIVE PATH BEFORE RELEASED!
    
  };
  return (
    <button
      onClick={() => handleGoogleSignIn()}
      style={{
        background:
          "linear-gradient(260deg, rgba(201, 84, 51, 1) 0%, rgba(201, 51, 60, 1) 50%, rgba(144, 30, 37, 1) 100%)",
        textShadow: "0 0.899px 1.617px rgba(0, 0, 0, 0.25)",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        width: "270px",
      }}
      className="font-inter p-2 rounded-full font-bold text-xl text-white text-shadow-xl hover:shadow-2xl shadow-black transition-all"
    >
      <span className="flex items-center justify-center">
        <img
          draggable="false"
          src="src/assets/g-icon.svg"
          alt="Google Icon"
          className="p-2"
        />
        <span className="text-[15px]">SIGN IN WITH GOOGLE</span>
      </span>
    </button>
  );
}
