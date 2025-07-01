import React from 'react';
import Sidebar from '../LandingPg/Sidebar';
import Tags from './Tags';
import './index.css';

function index() {
  return (
    <div className='stack-index'>
      <div className='stack-index-content'>      
        <Sidebar/>
        <Tags/>     
      </div>
    </div>
  );
}

export default index;