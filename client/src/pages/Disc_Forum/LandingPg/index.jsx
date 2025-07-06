// import React, { use } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';
// import Main from './Main';

// import { useEffect,useState } from 'react';

// function Index() {

//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     async function fetchquestions() {   //why didnt we used async await directly inside useEffect?
//       await axios.get('/api/v1/forum/questions')
//         .then((res) => {
//           console.log(res.data);
//           setQuestions(res.data.reverse());
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//     fetchquestions();
//   },[]);

//   return (
//     <div className='stack-index dark:bg-slate-800 dark:text-white'>
//         <div className='stack-index-content'>
            
//         <Sidebar className="sidebar  dark:bg-slate-800 dark:text-white"/>
//         <Main className="main  dark:bg-slate-800 dark:text-white" questions={questions}/> 
        
        
            
//         </div>
  
//     </div>
//   );
// }

// export default Index;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useSelector } from "react-redux";

function Index() {
  const [questions, setQuestions] = useState([]);
  const { forumUser } = useSelector((state) => state.users); // ✅ Optional (not used directly here)

  useEffect(() => {
    // ✅ Can't make useEffect callback async directly — useEffect expects either a cleanup function or nothing, not a Promise.
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("/api/v1/forum/questions");
        setQuestions(res.data.reverse());
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchQuestions();
  }, []);

  return (
  <div className="stack-index dark:bg-slate-800 dark:text-white min-h-screen">
    <div className="stack-index-content flex flex-col md:flex-row w-full">
      <Sidebar className="sidebar dark:bg-slate-800 dark:text-white w-full md:w-[240px] flex-shrink-0" />
      <Main className="main dark:bg-slate-800 dark:text-white flex-1" questions={questions} />
    </div>
  </div>
);
}

export default Index;
