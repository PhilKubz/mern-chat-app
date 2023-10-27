import React from 'react';
import './Chat.css';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

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
                    
        <div className='chatBody'>

            <p className='chatMessage'>     
                <span className='chatName'>Username</span>
                Chat message
                <span className='chatTimestamp'>
                    {new Date().toUTCString()}
                </span>
            </p>
            
            <p className='chatMessage chatReceiver'>     
                <span className='chatName'>Username</span>
                Chat message
                <span className='chatTimestamp'>
                    {new Date().toUTCString()}
                </span>
            </p>

        </div>

        <div className='chatFooter'>
            <InsertEmoticonOutlinedIcon />
            <form>
                <input placeholder='Type a message' type='text' />
                <button type='submit'>Send a message</button>
            </form>
                <MicOutlinedIcon />
        </div>

    </div>
  )
}

export default Chat