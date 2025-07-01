import React from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/usersSlice"; // Import your action to set user

const allowedDomain = "bitmesra.ac.in";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
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

      const token = await user.getIdToken(); // JWT token

      const response = await fetch("/api/v1/forum/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      console.log("Login API response:", data);
      if (response.ok) {
        localStorage.setItem("token", token); // ✅ Save token
        localStorage.setItem("user", JSON.stringify(data)); // Still keep user
        dispatch(setUser(data));
        
        document.getElementById("my_modal_5").close();
        alert(`✅ Welcome, ${user.displayName}`);
        navigate("/");
      } else {
        alert("❌ Server rejected access");
        await signOut(auth);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.code === "auth/popup-closed-by-user") {
        alert("❌ Authentication canceled. Please try again.");
      } else {
        alert("❌ Something went wrong.");
      }
    }
  };

  return (
    <div className="dark:bg-slate-900 dark:text-black">
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle md:ml-2"
      >
        <div className="modal-box">
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-2xl text-center">
            Welcome to <span className="text-pink-500">BiTKiT</span>
          </h3>
          <h5 className="py-2 text-center">
            Sign in with your BIT Mesra Google Account{" "}
            <i className="fa-solid fa-circle-info fa-xl"></i>
          </h5>

          <div className="flex flex-col items-center mt-6">
            <button
              onClick={handleGoogleLogin}
              className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200 shadow-md"
            >
              <i className="fa-brands fa-google mr-2"></i> Sign in with Google
            </button>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Only{" "}
              <span className="font-semibold text-blue-600">
                bitmesra.ac.in
              </span>{" "}
              emails are allowed.
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
