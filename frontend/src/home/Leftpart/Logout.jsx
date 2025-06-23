import axios from 'axios';
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const Logout = () => {
  const navigateTo = useNavigate();
  const handleLogout = ()=>{
    axios.post('http://192.168.0.34:3000/user/logout',{},{withCredentials:true})
    .then((response)=>{
      if(response.data){
        localStorage.clear('ChatApp')
        window.location.reload();
        navigateTo('/login')
        toast.success('logout successful')
      }
    })
    .catch((error)=>{
      console.log(error)
    });
    
  }
  return (
    <div className='px-5  py-3 flex items-center'>
        <BiLogOut className='text-2xl cursor-pointer'onClick={handleLogout}/>
       
    </div>
  )
}

export default Logout