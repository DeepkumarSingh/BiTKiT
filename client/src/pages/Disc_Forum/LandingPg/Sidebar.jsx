// import React from 'react';
// import { NavLink } from 'react-router-dom';

// // Material UI Icons
// import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// function Sidebar() {
//   return (
//     <div className="flex flex-col p-5 min-h-[calc(100vh-64px)] border-r border-gray-300 dark:border-gray-700 w-[240px] flex-shrink-0 bg-[#fcfcfc] dark:bg-gray-900 box-border
//       max-[992px]:w-[200px] max-[992px]:p-4 
//       max-[768px]:flex-row max-[768px]:w-full max-[768px]:min-h-fit max-[768px]:h-auto max-[768px]:border-r-0 max-[768px]:border-b max-[768px]:justify-around max-[768px]:items-center
//       max-[480px]:p-2"
//     >
//       <div className="flex flex-col w-full max-[768px]:flex-row max-[768px]:justify-around max-[768px]:flex-wrap max-[768px]:gap-2">
//         <div className="flex flex-col w-full p-2 max-[768px]:flex-row max-[768px]:p-0 max-[768px]:gap-2">
//           <div className="flex flex-col mb-1 max-[768px]:mb-0 max-[768px]:flex-grow">

//             <div className="flex flex-col w-full">

//               <div className="flex items-center px-5 py-2 w-full text-gray-600 dark:text-gray-300 hover:border-r-4 hover:border-blue-600 hover:text-gray-900 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-gray-800 transition-all 
//   max-[768px]:justify-center max-[768px]:px-3 max-[768px]:hover:border-r-0 max-[768px]:hover:border-b-2">
//   <NavLink
//     to="/disc_forum_homepage"
//     className={({ isActive }) =>
//       `flex items-center gap-2 w-full no-underline ${
//         isActive ? "font-semibold text-[#0a4a89] dark:text-blue-400" : "text-inherit"
//       } max-[992px]:text-sm max-[480px]:text-xs`
//     }
//   >
//     <QuestionAnswerIcon fontSize="small" />
//     Questions
//   </NavLink>
// </div>

// <div className="flex items-center px-5 py-2 w-full text-gray-600 dark:text-gray-300 hover:border-r-4 hover:border-blue-600 hover:text-gray-900 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-gray-800 transition-all 
//   max-[768px]:justify-center max-[768px]:px-3 max-[768px]:hover:border-r-0 max-[768px]:hover:border-b-2">
//   <NavLink
//     to="/tags"
//     className={({ isActive }) =>
//       `flex items-center gap-2 w-full no-underline ${
//         isActive ? "font-semibold  text-[#0a4a89] dark:text-blue-400" : "text-inherit"
//       } max-[992px]:text-sm max-[480px]:text-xs`
//     }
//   >
//     <LocalOfferIcon fontSize="small" />
//     Tags
//   </NavLink>
// </div>


//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar - Hamburger at Top Left */}
      <div className="md:hidden flex items-center justify-start p-4 bg-white dark:bg-gray-900 shadow">
        <button onClick={() => setIsOpen(true)} aria-label="Open Sidebar">
          <MenuIcon className="text-gray-800 dark:text-white" />
        </button>
      </div>

      {/* Sidebar Drawer (Mobile & Desktop) */}
      <div className={`fixed top-0 left-0 h-full z-50 bg-[#fcfcfc] dark:bg-gray-900 shadow-lg w-[240px] transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:flex md:flex-col md:w-[240px] md:min-h-[calc(100vh-64px)] md:border-r md:border-gray-300 dark:md:border-gray-700`}>
        
        {/* Close Button (Mobile Only) */}
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={() => setIsOpen(false)} aria-label="Close Sidebar">
            <CloseIcon className="text-gray-700 dark:text-white" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col p-5 gap-4">
          <NavLink
            to="/disc_forum_homepage"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2 transition-all no-underline hover:border-r-4 hover:border-blue-600 hover:bg-blue-50 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-800
              ${isActive ? 'font-semibold text-[#0a4a89] dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}`
            }
            onClick={() => setIsOpen(false)}
          >
            <QuestionAnswerIcon fontSize="small" />
            <span>Questions</span>
          </NavLink>

          <NavLink
            to="/tags"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2 transition-all no-underline hover:border-r-4 hover:border-blue-600 hover:bg-blue-50 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-800
              ${isActive ? 'font-semibold text-[#0a4a89] dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}`
            }
            onClick={() => setIsOpen(false)}
          >
            <LocalOfferIcon fontSize="small" />
            <span>Tags</span>
          </NavLink>
        </div>
      </div>

      {/* Optional Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
