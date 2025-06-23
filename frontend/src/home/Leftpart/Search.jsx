import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import UseGetAllUsers from '../../context/UseGetAllUsers.jsx'
import useConversation from '../../zustand/useConversation.js'

const Search = () => {
  const [search , setSearch] = useState('');
  const [allUsers] = UseGetAllUsers();
  const {setSelectedConversation} = useConversation();
  const handleSearch = (e)=>{
    e.preventDefault();
    if(!search) return
    const conversation = allUsers.find((user)=>
    user.username.toLowerCase().includes((search.toLowerCase()))
    )
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }
    else{
      setSearch("user not found")
    }
  }
  return (
    <div className='p-3'>
        <form action=""onSubmit={handleSearch}>
            <div className='flex items-center gap-4 justify-center'>
                <input type="text"
                className='border border-gray-500 px-5 py-2 rounded-2xl w-[90%] outline-none '
                placeholder='Search'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
            
                <FaSearch className='text-2xl font-semibold cursor-pointer'/>
            </div>
        </form>
    </div>
  )
}

export default Search
