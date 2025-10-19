import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export function Landing() {
 const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      navigate("/creator/create");
    },
    onError: () => console.log("Login Failed"),
  });

  return (
    <button
      onClick={() => login()}
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
          className="p-2 pl-3"
        />
        <span className="pt-2">{"SIGN IN WITH GOOGLE"}</span>
      </span>
    </button>
  );
}
