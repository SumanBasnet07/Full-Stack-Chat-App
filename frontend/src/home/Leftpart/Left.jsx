import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = ({ showLeft, toggleLeft }) => {
  return (
    <div
      className={`
    bg-black text-gray-300
    fixed top-0 left-0 h-full
    ${showLeft ? 'w-[80%]' : 'w-0 overflow-hidden'}
    transition-all duration-300 ease-in-out
    z-40
    lg:static lg:w-[30%]
  `}
    >
      <Search />
      <Users toggleLeft={toggleLeft}/>
      <Logout />
    </div>
  );
};

export default Left