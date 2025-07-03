import { useAuth } from "../../context/AuthProvide";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("Users");
localStorage.removeItem("BuySellUser");

      setAuthUser(null); // ✅ clear user from context
      alert("👋 Logged out");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      {authUser && (
        <button
          className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Logout;
