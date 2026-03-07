import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import banner from "../../assets/banner.png"
import { FaInstagram,FaLinkedinIn,FaTwitter,FaFacebookF,} from "react-icons/fa";



const Banner = () => {
  return (
      <section>
      <div className='container md:flex mx-auto mb-[200px] '>
        <div className='mt-[192px]'>
          <p className='font-bold text-[28px] '>Hello i’m</p> 
          <h1 className='font-bold text-[90px] w-[405px] '>Brooklyn Simmons</h1>
          <button className='bg-[#FF494A] flex cursor-pointer hover:bg-[#a43131]  text-white items-center rounded-[50px] py-5 px-[30px] gap-[10px] font-medium mt-[20px]'>View Portfolio <FaArrowRight /> </button> 
        </div>

        
        <div className='relative'>
            <img src={banner} alt="" />
        </div>

        <div className=''>
           <p className='mt-[192px]  font-bold'>About Me</p>
           <p className='mt-[40px] text w-[296px]'>A personal <span className='text-[#FF494A]'>portfolio</span> is a collection of to your work, that is achievements, and a skills that <span  className='text-[#FF494A]'>web design</span> highlights in your</p>
           <p className='mt-[40px]'>Find me on</p>

           <div className='flex items-center gap-x-2 mt-2.5'> 
                   <div className='py-[13px] px-[13px] cursor-pointer hover:bg-[#5f5e5e]  rounded-[50px] bg-[#E7E7E7]'><FaInstagram /></div>
                   <div className='py-[13px] px-[13px] cursor-pointer hover:bg-[#5f5e5e]  rounded-[50px] bg-[#E7E7E7]'><FaLinkedinIn /></div>
                   <div className='py-[13px] px-[13px] cursor-pointer hover:bg-[#5f5e5e]  rounded-[50px] bg-[#E7E7E7]'><FaTwitter /></div>
                   <div className='py-[13px] px-[13px] cursor-pointer hover:bg-[#5f5e5e] rounded-[50px] bg-[#E7E7E7]'><FaFacebookF /></div>
            </div>

        </div>


       </div>
        <div className='absolute top-[780px] right-[480px]'>
            <div className="flex items-center justify-center mb-[50px]">
            <h1 className="text-[110px] font-black tracking-widest text-transparent [-webkit-text-stroke:1px_red]"> WEB DESIGN</h1>
        </div>
        </div>
        <div className='absolute top-[700px] right-[400px] z-[-99999]'>
            <div className="flex items-center justify-center mb-[50px]">
            <h1 className="text-[130px] font-black tracking-widest text-transparent [-webkit-text-stroke:1px_black]"> WEB DESIGN</h1>
        </div>
        </div>

      </section>
  )
}

export default Banner