import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const allowedDomain = "bitmesra.ac.in";

const Login = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email;
      const domain = email.split("@")[1];

      if (domain !== allowedDomain) {
        alert("❌ Access denied. Use your BIT Mesra email.");
        await signOut(auth);
        return;
      }

      // ✅ Get ID token
      const token = await user.getIdToken();//its a jwt token

      // 🔒 Send token to your backend for secure validation
      const response = await fetch("/api/v1/forum/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data)); // Save user._id etc.

        dispatch(setUser(data)); // <-- This is important!
        
         navigate("/"); // Redirect to homepage
        alert(`✅ Welcome, ${user.displayName}`);
       
        
      } else {
        alert("❌ Server rejected access");
        await signOut(auth);
      }

    } catch (error) {
      console.error("Login error:", error);
      if (error.code === 'auth/popup-closed-by-user') {
        alert("❌ Authentication canceled. Please try again.");
      } else {
        alert("❌ Something went wrong.");
      }
    }

    
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#04152d] via-[#19376d] to-[#576cbc] text-white px-4 sm:px-6 lg:px-8 animate-[gradientShift_15s_ease_infinite] bg-[length:200%_200%]">
  <div className="bg-[#0b2447]/30 backdrop-blur-xl border border-white/10 flex flex-col justify-center items-center rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-[20rem] min-h-[24rem] text-center transform transition-all duration-500 hover:scale-105">
    <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a3bffa]">
      BIT Mesra Portal
    </h1>
    <p className="text-sm sm:text-base text-gray-200 mb-10 mt-7 leading-relaxed">
      Only students with a <span className="text-[#a3bffa] font-semibold">BIT Mesra</span> email can log in.
    </p>
    <button
      onClick={handleLogin}
      className="relative overflow-hidden bg-[#576cbc] hover:bg-[#4356a4] text-white font-semibold px-6 py-3 mt-4 rounded-xl transition duration-300 shadow-lg h-[3rem] w-full max-w-[12rem] transform hover:-translate-y-1 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-500 hover:before:left-[100%]"
    >
      Sign in with Google
    </button>
  </div>
</div>


  );
}

export default Login;
