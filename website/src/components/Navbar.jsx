import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../context/SearchBar'

const Navbar = () => {

  const navigate = useNavigate()
  return (
    <>
     <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=""/>
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=""/>
           <SearchBar/>
        </div>
        {/* <div className='flex items-center gap-4'>
        <input className='w-[38rem] h-12 pl-6 bg-fuchsia-50 rounded-3xl px-3 placeholder:text-slate-black font-bold outline-none' type="text" placeholder="search your song"/>
        <img className= 'w-7' src={assets.search_icon}/>
        
        </div>  */}
        <div className='grid grid-cols-2 ml-[3rem] '>
            
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center ml-10'>A</p>
        </div>
     </div>
     {/* <div className='flex items-center gap-2 mt-4'>
           <p className='bg-pink-600 text-white px-4 py-1 rounded-2xl cursor-pointer'>All</p>
           <p className='bg-pink-600 px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
           
     </div> */}
    </>
  )
}
 
export default Navbar
