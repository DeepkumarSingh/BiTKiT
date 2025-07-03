import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";
import { useState, useEffect } from 'react';

const Developer = () => {
    const [developer, setDeveloper] = useState([])
    useEffect(() => {
        const getDeveloper = async () => {
            try {
                const res = await axios.get("http://localhost:4001/Developer");
                console.log(res.data);
                setDeveloper(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getDeveloper();
    }, [])
    //const MembersList = list;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-lg container mx-auto md:px-20 px-4'>
                {/* Join Now Section */}
                <div className='text-center mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 rounded-xl shadow-lg'>
                    <h2 className='text-3xl font-bold mb-2'>Hello BITIANS 👋</h2>
                    <p className='mb-6 text-lg px-4 md:px-32'>
                        Here is <span className='text-pink-500 font-extrabold'>BiTKiT</span> — your all-in-one platform for everything you need in your college journey.
                        From academic resources and peer connections to buy & sell opportunities, student clubs, communities, and much more.
                    </p>
                    <a
                        href="/signup"
                        className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition duration-300"
                    >
                        Join Now
                    </a>
                    <br></br>
                    {/* <span className="mt-4 text-sm text-white/80">
                        Already a member?{" "}
                        <a
                            className="underline cursor-pointer hover:text-white"
                            onClick={() => document.getElementById("my_modal_5").showModal()}
                        >
                            Login
                        </a>
                        <Login />
                    </span> */}
                </div>


                {/* Developers Section */}
                <div>
                    <div className='text-center mt-10'>
                        <h1 className='font-bold text-4xl'>Meet the <span className='text-pink-500'>Developers</span></h1>
                        <p className='text-center mt-2'>Feel free To connect with the developer with given linkedIn Profile</p>
                    </div>
                </div>
                <div>
                    <Slider {...settings}>
                        {developer.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))
                        }
                    </Slider>
                </div>
            </div>
        </>

    )
}

export default Developer
