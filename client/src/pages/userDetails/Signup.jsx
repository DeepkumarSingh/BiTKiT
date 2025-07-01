import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("http://localhost:4001/user/signup", userInfo);
            if (res.data) {
                toast.success('Signup Successfully');
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                navigate(from, { replace: true });
            }
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        }
    };

    return (
        <>
            <Navbar />
            {/* <div
                style={{
                    backgroundImage: "url('/banner1.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    width: "100%",
                }}
                className="flex items-center justify-center bg-slate-100 dark:bg-slate-900 dark:text-white"> */}
            <div className="flex items-center justify-center px-2 min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-white" style={{ backgroundImage: "url('/banner1.jpeg')" }}>

                <div className="p-6 shadow-xl rounded-md bg-white dark:bg-slate-800 w-full max-w-md mx-4 sm:mx-auto relative">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link
                            to="/"
                            className="absolute top-3 right-3 text-sm px-2 py-1 bg-slate-900 text-white rounded-full hover:bg-slate-700 z-10"
                            title="Close"
                        >
                            ✕
                        </Link>
                        {/* <Link to="/" className="btn dark:bg-slate-900 dark:text-white mt-0">✕</Link> */}

                        <h4 className="font-bold text-xl md:text-3xl text-center">
                            Welcome to <span className="text-pink-500">BiTKiT</span>
                        </h4>
                        <h3 className="py-2 text-center">Sign Up</h3>

                        {/* Full Name */}
                        <div className="mt-3 space-y-2">
                            <label>Fullname <i className="fa-solid fa-user fa-lg"></i></label>
                            <input type="text" placeholder="Enter your FullName"
                                className="w-full px-3 py-1 border rounded-md outline-none dark:text-black"
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Email */}
                        <div className="mt-3 space-y-2">
                            <label>Email <i className="fa-solid fa-envelope fa-lg"></i></label>
                            <input type="email" placeholder="Enter your College Email"
                                className="w-full px-3 py-1 border rounded-md outline-none dark:text-black"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className="mt-3 space-y-2">
                            <label>Password <i className="fa-solid fa-key fa-lg"></i></label>
                            <input type="password" placeholder="Enter Password"
                                className="w-full px-3 py-1 border rounded-md outline-none dark:text-black"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Signup Button */}
                        <div className="mt-4 text-center">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-2 py-1 hover:bg-pink-800 duration-200 mb-2"
                            >
                                SIGN UP
                            </button>

                            {/* Moved this out of <p> to avoid nesting issues */}
                            {/* <div className="text-md">
                                Have an account?
                                <button
                                    type="button"
                                    className="underline text-blue-700 ml-1"
                                    onClick={() => document.getElementById("my_modal_5").showModal()}
                                >
                                    Login
                                </button>
                            </div> */}
                        </div>
                    </form>

                    {/* Modal is outside the form now */}
                    <Login />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Signup;
