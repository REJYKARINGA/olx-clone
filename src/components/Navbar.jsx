import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { IoIosSearch } from 'react-icons/io'
import { SlArrowDown } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa6";


const Navbar = () => {
  const {user,logOut} = UserAuth()
  const navigate = useNavigate()


const handleLogout = async ()=>{
try {
  await logOut()
  navigate('/')
} catch (error) {
  console.log(error)
}
}
  return (
    <>
    <div className='absolute w-full  p-1 flex items-center justify-between z-50 bg-slate-200  border-b-white'>
      <div className=' flex  '>
 
      <Link to='/'>
            <img src='/olx-logo.svg' alt='' className='w-14 mx-'/>
        </Link>
        <div className='items-center rounded border-2 hover:border-cyan-400  border-black flex p-2 mx-2 h-12 bg-white'>
        <IoIosSearch size={25}  /> 
        <input className='outline-none text-base' type="text"  placeholder='Search your city, area or locality' />
        <SlArrowDown size={20} />
        </div>



        <div className='rounded border-2 hover:border-cyan-400  w-[600px] items-center justify-between border-black flex  mx-2  h-12 bg-white'>
        
      
          <input className='outline-none  w-[100%] pl-3 text-red-500' type="text" placeholder='Find Cars, Mobile Phones and more...' />
        <div className=' text-white bg-green-950 h-full w-10'>
        <IoIosSearch size={25} className='m-2'  />
        </div>
        </div>
       <div className=' flex m-2 '>
       <h4 className='align-middle uppercase pr-2 text-green-950'><b>English </b>  </h4>
       <SlArrowDown size={20} />
       </div>
      </div>
       
        
       {
        user?.email ? 
       (   <div className='text-green-950 flex items-center'>
        <HiOutlineChatBubbleOvalLeft size={40} className='mr-2 p-2 rounded-full hover:bg-cyan-100 '/>
        <FaRegBell size={40} className='mr-2 p-2 rounded-full hover:bg-cyan-100 ' />
        <Link to='/logout'>
            <button onClick={handleLogout} className=' hover:no-underline underline pr-4'>
              <img className='rounded-full w-8 '  src='/profile_icon.png'  />
            </button>
            
        </Link>
        <SlArrowDown size={15} className='mr-10'/>
        

        <Link to='/sell'>
        <button className='capitaliz flex  items-center border-4 border-x-yellow-300 border-y-blue-600 px-4 py-2 mr-4 rounded-full  cursor-pointer ' >
                <FaPlus size={14}/>
                <b>SELL</b></button>
        </Link>
        </div>)
         : (
          <div className='text-green-950 flex items-center'>
          <Link to='/login'>
              <button className='capitaliz hover:no-underline underline pr-4'><b>Login</b></button>
          </Link>
  
          <Link to='/sell'>
              <button className='capitaliz flex  items-center border-4 border-x-yellow-300 border-y-blue-600 px-4 py-2 mr-4 rounded-full  cursor-pointer ' >
                <FaPlus size={14}/>
                <b>SELL</b></button>
          </Link>
          </div>
        )
       } 
        
        
    </div>
    </>
  )
}

export default Navbar