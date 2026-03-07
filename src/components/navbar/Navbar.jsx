import React from 'react'
import logo from "../../assets/logo.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaInstagram,FaLinkedinIn,FaTwitter,FaFacebookF,} from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {
  return (
 <nav className='bg-[#f4f4f4]  font-Rajdhani py-4'>
  <div className='container flex justify-between mx-auto  '>
    <div>
        <img src={logo} alt="" />
    </div>


    <div className='flex items-center gap-x-[30px] font-bold'>
        <div>Home</div>
        <div>About</div>
        <div className='flex items-center gap-x-0.5'>Services <MdKeyboardArrowDown /></div>
        <div className='flex items-center gap-x-0.5'>Blog <MdKeyboardArrowDown /></div>
        <div className='flex items-center gap-x-0.5'>Project <MdKeyboardArrowDown /></div>
        <div>Contact</div>
    </div>



    <div className='flex items-center gap-x-2'> 
        <div className='py-[13px] px-[13px] cursor-pointer hover:bg-[#5f5e5e] rounded-[50px] bg-[#E7E7E7]'><FaInstagram /></div>
        <div className='py-[13px] px-[13px] cursor-pointer hover:bg-[#5f5e5e]  rounded-[50px] bg-[#E7E7E7]'><FaLinkedinIn /></div>
        <div className='py-[13px] px-[13px] cursor-pointer hover:bg-[#5f5e5e]  rounded-[50px] bg-[#E7E7E7]'><FaTwitter /></div>
        <div className='py-[13px] px-[13px] cursor-pointer hover:bg-[#5f5e5e]  rounded-[50px] bg-[#E7E7E7]'><FaFacebookF /></div>
        <div className='py-[13px] px-[13px] ml-[25px] cursor-pointer hover:bg-[#a43131] rounded-[50px] bg-[#FF494A] text-white text-[20px]'><RiMenu3Fill /></div>
    </div>

    </div>

  </nav>

 
  )
}

export default Navbar