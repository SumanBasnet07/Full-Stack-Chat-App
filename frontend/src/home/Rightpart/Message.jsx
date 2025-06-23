import React from "react";

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const isMe = message.senderId === authUser.user._id;
  const chatName = isMe ? "justify-end" : "justify-start";
  const chatColor = isMe ? "bg-purple-600" : "bg-white";
  const chatText = isMe ? "text-white" : "text-black";

  const createdAt = new Date(message.createdAt);
  const formattedtime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-5 space-y-4">
      <div className={`flex ${chatName} items-end gap-2`}>
        <div
          className={` px-3 py-2 rounded-2xl max-w-xs ${chatColor} ${chatText}`}
        >
          <p>{message.message}</p>
        </div>
        <div className="text-xs text-gray-400">{formattedtime}</div>
      </div>
    </div>
  );
};

export default Message;
