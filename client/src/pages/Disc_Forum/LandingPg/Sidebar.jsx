import React from 'react';
import { NavLink } from 'react-router-dom';

// Material UI Icons
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Sidebar() {
  return (
    <div className="flex flex-col p-5 min-h-[calc(100vh-64px)] border-r border-gray-300 dark:border-gray-700 w-[240px] flex-shrink-0 bg-[#fcfcfc] dark:bg-gray-900 box-border
      max-[992px]:w-[200px] max-[992px]:p-4 
      max-[768px]:flex-row max-[768px]:w-full max-[768px]:min-h-fit max-[768px]:h-auto max-[768px]:border-r-0 max-[768px]:border-b max-[768px]:justify-around max-[768px]:items-center
      max-[480px]:p-2"
    >
      <div className="flex flex-col w-full max-[768px]:flex-row max-[768px]:justify-around max-[768px]:flex-wrap max-[768px]:gap-2">
        <div className="flex flex-col w-full p-2 max-[768px]:flex-row max-[768px]:p-0 max-[768px]:gap-2">
          <div className="flex flex-col mb-1 max-[768px]:mb-0 max-[768px]:flex-grow">

            <div className="flex flex-col w-full">

              <div className="flex items-center px-5 py-2 w-full text-gray-600 dark:text-gray-300 hover:border-r-4 hover:border-blue-600 hover:text-gray-900 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-gray-800 transition-all 
  max-[768px]:justify-center max-[768px]:px-3 max-[768px]:hover:border-r-0 max-[768px]:hover:border-b-2">
  <NavLink
    to="/disc_forum_homepage"
    className={({ isActive }) =>
      `flex items-center gap-2 w-full no-underline ${
        isActive ? "font-semibold text-[#0a4a89] dark:text-blue-400" : "text-inherit"
      } max-[992px]:text-sm max-[480px]:text-xs`
    }
  >
    <QuestionAnswerIcon fontSize="small" />
    Questions
  </NavLink>
</div>

<div className="flex items-center px-5 py-2 w-full text-gray-600 dark:text-gray-300 hover:border-r-4 hover:border-blue-600 hover:text-gray-900 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-gray-800 transition-all 
  max-[768px]:justify-center max-[768px]:px-3 max-[768px]:hover:border-r-0 max-[768px]:hover:border-b-2">
  <NavLink
    to="/tags"
    className={({ isActive }) =>
      `flex items-center gap-2 w-full no-underline ${
        isActive ? "font-semibold  text-[#0a4a89] dark:text-blue-400" : "text-inherit"
      } max-[992px]:text-sm max-[480px]:text-xs`
    }
  >
    <LocalOfferIcon fontSize="small" />
    Tags
  </NavLink>
</div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
