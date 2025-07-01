import React from 'react';
// import { useAuth } from '../context/AuthProvide';
import { useAuth } from '../../context/AuthProvide';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate(); 

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logout successfully");

            // Navigate to home page after logout
            setTimeout(() => {
                navigate("/", { replace: true });
            }, 1000);
        } catch (error) {
            toast.error("Error: " + error);
        }
    };

    return (
        <div>
            <button
                className='px-3 py-2 bg-pink-500 text-white rounded-md cursor-pointer'
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default Logout;
