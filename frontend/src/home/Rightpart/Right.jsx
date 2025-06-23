import React from 'react';
import { IoMenu } from "react-icons/io5";
import ChatUser from './ChatUser';
import Messages from './Messages';
import SendMessage from './SendMessage';

const Right = ({ toggleLeft, showLeft, hideLeft }) => {
  const handleClick = (e) => {
    // prevent hiding if the click is on the menu icon
    if (e.target.closest('.menu-icon')) return;
    hideLeft();
  };

  return (
    <div
      className="relative lg:w-[70%] w-full bg-slate-900 text-gray-300 min-h-screen"
      onClick={handleClick}
    >
      {/* Menu icon (for small screens) */}
      {!showLeft &&(
        <div className="lg:hidden absolute top-5 left-5 z-50">
        <IoMenu className="text-3xl text-white" onClick={toggleLeft} />
      </div>
      )}
      

      <ChatUser />
      <Messages />
      <SendMessage />
    </div>
  );
};

export default Right;
