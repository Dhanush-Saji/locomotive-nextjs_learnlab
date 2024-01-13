
const Section1 = () => {
  return (
    <>
    <div className='section1 relative z-0 overflow-hidden h-screen bg-[#6f8e99]'>
      
    <div className="noise z-10 h-screen w-[100%] overflow-hidden"></div>
    </div>
    <div className='px-16 absolute z-20 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full'>
    <h1 data-scroll data-scroll-speed='0.8' className='text-[3rem] md:text-[8rem] font-[800] text-center text-white leading-[3rem] md:leading-[10vw]'>CLASSIC CRAFT BEERS,
BREWED WITHOUT FUSS</h1>
      <p data-scroll data-scroll-speed='0.8' className='text-[1.2rem] md:text-[1.7rem] font-[400] text-center text-white mt-3'>PURE, HONEST AND DAMN DELICIOUS</p>
    </div>
    
    </>
  )
}

export default Section1