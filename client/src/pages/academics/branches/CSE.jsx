import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

function CSE() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen text-center md:w-[400px] mx-auto">
        <h2 className="text-bold text-3xl mt-2 mb-3"> Computer Science </h2>
        <h4 className="text-bold mt-1 mb-3"> Choose your Semester </h4>
        <div className="dark:bg-slate-900 dark:text-black text-black">
          
          <div className="collapse collapse-plus bg-base-200 mt-1">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Semester-1</div>
             <div className="collapse-content">
            <Link to="/course/cse/cse_sem1">
              <span className="text-blue-500">click-here</span>
            </Link>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mt-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Semester-2</div>
            <div className="collapse-content">
              <Link to="/course/cse/cse_sem2">
                <span className="text-blue-500">click-here</span>
              </Link>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mt-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Semester-3</div>
            <div className="collapse-content">
              <Link to="/course/cse/cse_sem3">
                <span className="text-blue-500">click-here</span>
              </Link>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mt-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Semester-4</div>
            <div className="collapse-content">
              <Link to="/course/cse/cse_sem4">
                <span className="text-blue-500">click-here</span>
              </Link>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mt-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Semester-5</div>
            <div className="collapse-content">
              <Link to="/course/cse/cse_sem5">
                <span className="text-blue-500">click-here</span>
              </Link>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mt-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Semester-6</div>
            <div className="collapse-content">
              <Link to="/course/cse/cse_sem6">
                <span className="text-blue-500">click-here</span>
              </Link>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mt-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Semester-7</div>
            <div className="collapse-content">
              <Link to="/">
                <span className="text-blue-500">coming soon..</span>
              </Link>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mt-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Semester-8</div>
            <div className="collapse-content">
              <Link to="/">
                <span className="text-blue-500">coming soon..</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default CSE;
