import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChatInfo'>
            <h2>Room Name</h2>
            <p>Last message sent in room</p>
        </div>
    </div>
  )
}

export default SidebarChat