import React from 'react';


const Registration = () => {
  return (
    <>
      <section  className='flex lg:justify-between lg:mx-0 mx-auto w-screen text-center lg:text-left overflow-x-hidden '>
        <div className='lg:w-2/4 w-[8977px] lg:ml-[193px] mt-[99px] lg:mt-[225px]  font-nunito '>
          <div className='font-bold lg:px-0 px-5 text-2xl lg:text-4xl'>Get started with easily register</div>
          <div className='lg:text-xl text-lg	pt-[13px] opacity-50 text-black font-normal'>Free register and you can enjoy it</div>
          <div className='mt-[62px] relative'>
            <input placeholder='Email' className='border-2 focus:outline-none   lg:w-96 py-6 px-14 border-[#11175D]  border-opacity-25 rounded-lg' type="text " />
            <p className='absolute  top-[-12px] bg-[#ffffffff] px-3 lg:left-6 left-14  '><span className='opacity-50 font-nunito tracking-widest'>Email Address</span> </p>
          </div>
          <div className='mt-[56px] relative'>
            <input placeholder='Your Name' className='border-2 focus:outline-none   lg:w-96 py-6 px-14 border-[#11175D]  border-opacity-25 rounded-lg' type="text " />
            <p className='absolute  top-[-12px] bg-[#ffffffff] px-3 lg:left-6 left-14  '><span className='opacity-50 font-nunito tracking-widest'>Full Name</span> </p>
          </div>
          <div className='mt-[56px] relative'>
            <input placeholder='******' className='border-2 focus:outline-none   lg:w-96 py-6 px-14 border-[#11175D]  border-opacity-25 rounded-lg' type="password" />
            <p className='absolute  top-[-12px] bg-[#ffffffff] px-3 lg:left-6 left-14 '><span className='opacity-50 font-nunito tracking-widest'>Password</span> </p>
          </div>
          <button className='lg:px-[158px] px-[124px]  lg:w-96 font-nunito font-semibold text-white hover:bg-[#5f35f5a9] bg-[#5F35F5] py-5 mt-[52px] rounded-[86px] '>Sign up</button>
          
          
          <p className=' font-nunito text-center lg:w-96 mt-6 pb-8 '>Already  have an account ? <span className=' font-nunito text-[#EA6C00] font-semibold '>Sign In</span></p>
        </div>
        
        
        <div className='lg:w-2/4 w-full'>
          <img className='w-full hidden lg:block  h-screen object-cover' src='src\assets\rightImg.jpg' alt="" srcset="" />

        </div>
      </section>
    </>
  )
}

export default Registration