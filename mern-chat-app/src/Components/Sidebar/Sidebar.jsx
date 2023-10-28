import React from 'react';
import './Sidebar.css';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from '../SidebarChat/SidebarChat';


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarHeader'>
        <Avatar src="https://avatars.githubusercontent.com/u/122698773?v=4"/>
        <div className='sidebarHeaderRight'>
        </div>
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
      <div className='sidebarSearch'>
        <div className='sidebarSearchContainer'>
          <SearchOutlinedIcon />
          <input placeholder='Search or start a new chat' type='text' />
        </div>
      </div>

      <div className='sidebarChats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>


    </div>
  )
}

export default Sidebar