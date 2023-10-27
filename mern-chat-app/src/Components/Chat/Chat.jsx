import React from 'react';
import './Chat.css';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function Chat() {
  return (
    <div className="chat">
        <div className='chatHeader'>
            <Avatar />

            <div className='chatHeaderInfo'>
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>

            <div className='chatHeaderRight'>
             <IconButton>
               <SearchOutlinedIcon />
             </IconButton>
             <IconButton>
               <AttachFileIcon />
             </IconButton>
             <IconButton>
               <MoreVertIcon />
             </IconButton>


            </div>            
            

        </div>
    </div>
  )
}

export default Chat