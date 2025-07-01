import React from 'react'

function Course() {
    return (
        <div>
            <div className='max-w-screen-2xl container mx-auto md:px-5'>
                <div className='items-center justify-center text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold text-pink-500 md:mt-1'>Branches</h1>
                    <p className='mt-3'>Select Your Branch </p>
                </div>
            </div >
            <div className='md:max-w-screen-4xl container mx-auto md:px-5 mt-7'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <a href="/course/cse">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt="CSE"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">CSE</button>
                            </div>
                        </div>

                    </div>
                </a>
                <a href="/course/aiml">    
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className="w-full aspect-[4/3] overflow-hidden">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">AIML</button>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/course/ece">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://cdn.pixabay.com/photo/2023/04/03/19/37/soldering-7897827_1280.jpg"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">ECE</button>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/course/eee">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">EEE</button>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/course/me">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1664910842853-0d643f6db30c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">ME</button>
                            </div>
                        </div>
                    </div>
                </a>
                
                <a href="/course/chem">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/13/21/41/scientist-2141259_1280.jpg"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">CHEMICAL</button>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/course/civil">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://images.unsplash.com/photo-1694521787193-9293daeddbaa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENpdmlsJTIwRW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">CIVIL</button>
                            </div>
                        </div>
                    </div>
                </a>
                
                <a href="/course/biotech">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://cdn.pixabay.com/photo/2022/04/07/03/33/research-7116736_1280.jpg"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">BIO-TECH</button>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/course/prod">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://cdn.pixabay.com/photo/2017/11/20/08/11/welder-2964752_1280.jpg"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">Production</button>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/course/food">
                    <div className="card bg-base-100 image-full w-64 shadow-xl mx-auto">
                        <figure className='w-full aspect-[4/3] overflow-hidden'>
                            <img
                                src="https://cdn.pixabay.com/photo/2020/06/02/18/10/noodles-5252012_1280.jpg"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 flex flex-col justify-between">
                            <div>
                                {/* Other content like title, description, etc. */}
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm">Food Eng.</button>
                            </div>
                        </div>
                    </div>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Course
