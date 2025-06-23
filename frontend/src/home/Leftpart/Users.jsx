import React from 'react'
import User from './User'
import UseGetAllUsers from '../../context/UseGetAllUsers'

const Users = ({ toggleLeft }) => {
  const [allUsers, loading] = UseGetAllUsers();
  return (
    <div>
      <h1 className='px-5 py-2 rounded font-semibold bg-slate-600 mt-3'>Messages</h1>
      <div className='h-[75vh] overflow-y-auto'>
        {allUsers.map((user, index) => (
          <User key={index} user={user} toggleLeft={toggleLeft} />
        ))}
      </div>
    </div>
  )
}

export default Users
