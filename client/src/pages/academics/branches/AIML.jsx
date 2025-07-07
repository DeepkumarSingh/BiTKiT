import React from 'react'
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

function AIML() {
    return (
    <>
        {/* <Navbar /> */}
                <div className='min-h-screen text-center md:w-[400px] mx-auto'
                >
                    <h2 className='text-bold text-xl mt-2 mb-3'> Artificial Intelligence & Machine Learning </h2>
                    <h4 className='text-bold text-sm mt-1 mb-3'> Choose your Semester </h4>
                    <div className='dark:bg-slate-900 dark:text-black text-black'>
                        <div className="collapse collapse-plus bg-base-200 mt-1">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium"
                            >Semester-1</div>
                            <div className="collapse-content">
                                <a href="/course/cse/cse_sem1"><span className='text-blue-500'>click-here</span></a>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mt-1">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Semester-2</div>
                            <div className="collapse-content">
                                <a href="/course/cse/cse_sem2"><span className='text-blue-500'>click-here</span></a>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mt-1">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Semester-3</div>
                            <div className="collapse-content">
                                <a href="/course/aiml/aiml_sem3"><span className='text-blue-500'>click-here</span></a>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mt-1">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Semester-4</div>
                            <div className="collapse-content">
                                <a href="/course/aiml/aiml_sem4"><span className='text-blue-500'>click-here</span></a>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mt-1">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Semester-5</div>
                            <div className="collapse-content">
                                <a href="/course/aiml/aiml_sem5"><span className='text-blue-500'>click-here</span></a>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mt-1">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Semester-6</div>
                            <div className="collapse-content">
                                <a href="/course/aiml/aiml_sem6"><span className='text-blue-500'>click-here</span></a>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mt-1">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Semester-7</div>
                            <div className="collapse-content">
                                <a href="/err"><span className='text-blue-500'>coming soon..</span></a>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 mt-1">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Semester-8</div>
                            <div className="collapse-content">
                                <a href="/err"><span className='text-blue-500'>coming soon..</span></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-bold text-sm mt-5 mb-3 text-red-500'> Note - 
                        <span className="text-white"> If you have better study resources like notes or YouTube links, feel free to share them with BiTKiT</span></h4>
                        <a href="https://forms.gle/kwAQt329rWNK99F9A" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Contribute</a>
                    </div>
                    
                </div>
                {/* <Footer /> */}
    </>
    )
}

export default AIML
