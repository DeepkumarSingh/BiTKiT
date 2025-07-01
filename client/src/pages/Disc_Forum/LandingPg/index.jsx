import React, { use } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Main from './Main';
import './index.css';
import { useEffect,useState } from 'react';

function Index() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchquestions() {   //why didnt we used async await directly inside useEffect?
      await axios.get('/api/v1/forum/questions')
        .then((res) => {
          console.log(res.data);
          setQuestions(res.data.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchquestions();
  },[]);

  return (
    <div className='stack-index dark:bg-slate-800 dark:text-white'>
        <div className='stack-index-content'>
            
        <Sidebar className="sidebar  dark:bg-slate-800 dark:text-white"/>
        <Main className="main  dark:bg-slate-800 dark:text-white" questions={questions}/> 
        
        
            
        </div>
  
    </div>
  );
}

export default Index;