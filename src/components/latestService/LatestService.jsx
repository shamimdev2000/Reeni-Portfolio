import React from 'react'
import img2 from "../../assets/img2.svg"

const LatestService = () => {
    const newLocal = 'font-bold text-[24px] font-rajdhani pt-8.5 pl-9.5 '
  return (
   <section className='container mx-auto mt-30 '>
    <div className='text-center mx-auto '>
       <h2 className='font-medium text-[#FF494A]  font-rubik'>Latest Service</h2>
       <h1 className='font-bold text-[48px] font-rajdhani text-[#141414]'>Inspiring The World One Project</h1>
       <p className='text-[#5D6570] w-156.75 text-center mx-auto'>Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
    </div>

    <div className='flex'>
        <div>
        <div className='mt-15'>
              <div className='border-b-2 border-r-2 border-[#FF494A]  bg-[#F4F4F4]  w-[622.5px] rounded-[20px]'>
               <div className='flex gap-x-11 '>
                  <h2 className='font-bold text-[24px] font-rajdhani pt-8.5 pl-9.5 '>01. A Portfolio of Creativity</h2>
               </div>
                <p className='w-[542.5px] pt-5.5 pl-9.5 pb-8.5 font-rubik '>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
              </div>
        </div>

        <div className='mt-5'>
              <div className='border-b-2 border-r-2 border-[#FF494A]  bg-[#F4F4F4]  w-[618.5px] rounded-[20px]'>
               <div className='flex gap-x-[44px] '>
                  <h2 className={newLocal}>02. My Portfolio of Innovation</h2>
               </div>
                <p className='w-[542.5px] pt-[22px] pl-[38px] pb-[34px] font-rubik '>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
              </div>
        </div>

        <div className='mt-5'>
              <div className='border-b-2 border-r-2 border-[#FF494A]  bg-[#F4F4F4]  w-[622.5px] rounded-[20px]'>
               <div className='flex gap-x-[44px] '>
                  <h2 className='font-bold text-[24px] font-rajdhani pt-[34px] pl-[38px] '>03. A Showcase of My Projects</h2>
               </div>
                <p className='w-[542.5px] pt-[22px] pl-9.5 pb-[34px] font-rubik '>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
              </div>
        </div>
        
    </div>
    <div className='w-full bg-cover bg-center bg-no-repeat ml-25'>
        <img src={img2} alt="" />
    </div>
    </div>
   </section>
  )
}

export default LatestService