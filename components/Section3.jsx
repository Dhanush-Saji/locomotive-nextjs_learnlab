import React from 'react'

const Section3 = () => {
  return (
    <div className='section3 relative h-[100vh] bg-[#1D1D1D] overflow-hidden'>
        <div className='text-white absolute z-20 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row justify-center items-center w-full gap-[10vw]'>
      <div className='text-[2rem] md:text-[4vw] leading-[2rem] md:leading-[6vw] font-[400] text-center custom-font min-w-[40vw]'>
      BECOME <br /> PART OF <br /> OUR HOOD
      </div>
      <div className='flex flex-col w-[30vw] h-[20vh]'>
        <p className=' custom-font1 text-[1vw] mb-auto leading-[2vw]'>Only the absolute pioneers who sign up for our newsletter get a front row seat, because at BrewDistrict24 we cherish those who embrace this adventure with us from the very beginning.</p>
        <p className=' custom-font1 text-[0.7vw] mt-auto leading-[2vw] opacity-50'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
        </div>
    </div>
  )
}

export default Section3