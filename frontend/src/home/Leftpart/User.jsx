import React from 'react';
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';
import avatar from '../../assets/avatar.jpg'

const User = ({ user, toggleLeft }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  const handleSelect = () => {
    setSelectedConversation(user);
    // Auto-hide sidebar on small screens (like <1024px)
    if (window.innerWidth < 1024) {
      toggleLeft?.(); // optional chaining
    }
  };

  return (
    <div>
      <div
        className={`flex items-center gap-4 p-3 hover:bg-slate-900 rounded duration-300 ${isSelected ? "bg-slate-900" : ""}`}
        onClick={handleSelect}
      >
        <div className='relative'>
          <img src={avatar} alt="" className='w-12 h-12 rounded-full' />
          {isOnline && (
            <div className="w-2 h-2 bg-green-600 rounded-full absolute top-1 right-1" />
          )}
        </div>
        <div>
          <p className='font-semibold'>{user.username}</p>
          <p className='text-xs text-gray-500'>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
