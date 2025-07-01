import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

// Material UI Icons
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <div className="link">

              <div className="link-tag">
                <NavLink to="/disc_forum_homepage" className={({ isActive }) => isActive ? "active" : ""}>
                  <QuestionAnswerIcon fontSize="small" style={{ marginRight: "6px" }} />
                  Questions
                </NavLink>
              </div>

              <div className="link-tag">
                <NavLink to="/tags" className={({ isActive }) => isActive ? "active" : ""}>
                  <LocalOfferIcon fontSize="small" style={{ marginRight: "6px" }} />
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
