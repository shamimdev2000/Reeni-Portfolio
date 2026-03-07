import React from 'react'
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
import icon4 from "../../assets/icon4.svg"


const Exprience = () => {
  return (
    <section className='container mx-auto mt-[120px] mb-[120px]'>

        <div className='md:flex justify-between'>
            <div className=' border1 border-[#FF494A] border w-[296px] rounded-[20px]'>
                <img className='mt-[43.5px] ml-[122px]' src={icon1} alt="" />
                <h2 className='pt-[30px]  ml-[89px] text-[24px] font-bold'>Web Design</h2>
                <p className='pt-[9px]  ml-[102px]  mb-[41px] text-[#5D6570]'>120 Projects</p>
            </div>
            <div className=' border1 border-[#FF494A] border w-[296px] rounded-[20px]'>
                <img className='mt-[43.5px] ml-[122px]' src={icon2} alt="" />
                <h2 className='pt-[30px]  ml-[89px] text-[24px] font-bold'>Ui/Ux Design</h2>
                <p className='pt-[9px]  ml-[102px]  mb-[41px] text-[#5D6570]'>241 Projects</p>
            </div>
            <div className=' border1 border-[#FF494A] border w-[296px] rounded-[20px]'>
                <img className='mt-[43.5px] ml-[122px]' src={icon3} alt="" />
                <h2 className='pt-[30px]  ml-[89px] text-[24px] font-bold'>Web Research</h2>
                <p className='pt-[9px]  ml-[102px]  mb-[41px] text-[#5D6570]'>240 Projects</p>
            </div>
            <div className=' border1 border-[#FF494A] border w-[296px] rounded-[20px]'>
                <img className='mt-[43.5px] ml-[122px]' src={icon4} alt="" />
                <h2 className='pt-[30px]  ml-[89px] text-[24px] font-bold'>Marketing</h2>
                <p className='pt-[9px]  ml-[102px]  mb-[41px] text-[#5D6570]'>331 Prodect</p>
            </div>
        </div>


        <div className='mt-[120px] md:flex justify-between'>

              <div className=' border1 border-none bg-[#F4F4F4] border w-[622.5px] rounded-[20px]'>
               <div className='flex gap-x-[44px] '>
                  <h2 className='font-bold text-[167px] mt-[42px] ml-[52px] text-[#FF494A]'>25</h2>
                <h3 className='font-bold text-[48px] w-[216px] mt-[95px] '>Years Of experience</h3>
               </div>
                <p className='w-[518px] pt-[12px] pl-[52px] pb-[51px] '>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
              </div>

             <div className='gap-x-[30px] '>
                 <div>

                <div className='  border-b-2 border-r-2 border-[#FF494A]  bg-[#F4F4F4]  w-[296px] rounded-[20px]'>
               <div className='flex gap-x-[44px] '>
                <h3 className='font-bold text-[46px] w-[216px] pt-[35px] pl-[95px]   '>20K+</h3>
               </div>
                <p className='w-[518px] pt-[12px] pl-[66px] text-[#5D6570] pb-[51px]  '>Our Project Complete</p>
              </div>

              </div>
              
              <div>
                <div className='mt-[30px]  border-b-2 border-r-2 border-[#FF494A]  bg-[#F4F4F4]  w-[296px] rounded-[20px]'>
               <div className='flex gap-x-[44px] '>
                <h3 className='font-bold text-[46px] w-[216px] pt-[35px] pl-[95px]  '>200+</h3>
               </div>
                <p className='w-[518px] pt-[12px] pl-[88px] text-[#5D6570] pb-[51px]'>Clients Reviews</p>
              </div>
              </div>
             </div>
             <div className=''>
                 <div>

                <div className='  border-b-2 border-r-2 border-[#FF494A]  bg-[#F4F4F4]  w-[296px] rounded-[20px]'>
               <div className='flex gap-x-[44px] '>
                <h3 className='font-bold text-[46px] w-[216px] pt-[35px] pl-[95px]   '>10K+</h3>
               </div>
                <p className='w-[518px] pt-[12px] pl-[88px] text-[#5D6570] pb-[51px] '>Our Natural Products</p>
              </div>

              </div>
              
              <div className=''>
                <div className='mt-[30px]  border-b-2 border-r-2 border-[#FF494A]  bg-[#F4F4F4]  w-[296px] rounded-[20px]'>
               <div className='flex gap-x-[44px] '>
                <h3 className='font-bold text-[46px] w-[216px] pt-[35px] pl-[68px]  '>1,000+</h3>
               </div>
                <p className='w-[518px] pt-[12px] pl-[71px] text-[#5D6570] pb-[51px] '>our Satisfied Clientd</p>
              </div>
              </div>
             </div>

        </div>

    </section>
  )
}

export default Exprience