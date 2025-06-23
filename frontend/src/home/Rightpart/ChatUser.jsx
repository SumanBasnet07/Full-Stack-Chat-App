import React from 'react';
import useConversation from '../../zustand/useConversation.js';
import {useAuth} from '../../context/AuthProvider.jsx'
import { useSocketContext } from '../../context/SocketContext.jsx';
import avatar from '../../assets/avatar.jpg'
const ChatUser = () => {
  const authUser = useAuth()
  // console.log(authUser.authUser.user.username)
  const { selectedConversation } = useConversation();
const {onlineUsers} = useSocketContext();
  const getOnlineUsersStatus = (userId)=>{
    return onlineUsers.includes(userId)?"Online":"Offline"
  }
const isOnline = onlineUsers.includes(selectedConversation?._id)

  if (!selectedConversation) {
    return <div className="text-center text-gray-400 mt-3">
      <h2>Welcome <span>{authUser.authUser.user.username}</span></h2>
      <p>Select user to start a Conversation</p>
    </div>;
  }

  return (
    <div className="bg-gray-800 w-full p-2">
      <div className="flex items-center justify-center gap-5 mt-2">
        <div className="relative">
          <img src={avatar} alt="" className="w-12 h-12 rounded-full" />
          {isOnline && (<div className="w-2 h-2 bg-green-600 rounded-full absolute top-1 right-1" />)}
        </div>
        <div>
          <p className="font-semibold">{selectedConversation.username}</p>
          <p className="text-xs">{getOnlineUsersStatus(selectedConversation._id)}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
