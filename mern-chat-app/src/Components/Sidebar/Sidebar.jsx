import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from '../SidebarChat/SidebarChat';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className={isSidebarOpen ? 'sidebar' : 'sidebar collapsed'}>
      <div className="toggleButtonContainer">
        <IconButton className="toggleButton" onClick={toggleSidebar}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </div>
      {isSidebarOpen && (
        <>
          <div className="sidebarContent">
            <div className="sidebarHeader">
              <Avatar src="https://avatars.githubusercontent.com/u/122698773?v=4" />
              <div className="sidebarHeaderRight">
                <IconButton>
                  <DonutLargeIcon />
                </IconButton>
                <IconButton>
                  <ChatIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
            <div className="sidebarSearch">
              <div className="sidebarSearchContainer">
                <SearchOutlinedIcon />
                <input placeholder="Search or start a new chat" type="text" />
              </div>
            </div>
            <div className="sidebarChats">
              <SidebarChat />
              <SidebarChat />
              <SidebarChat />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;

