
const Section2 = () => {
    
  return (
    <div className='section2 bg-[rgb(248,246,228)] justify-center items-center relative py-24 h-screen md:h-auto overflow-hidden'>
        <div className=' flex flex-col justify-center items-center w-full pt-16'>
      <h2 data-scroll data-scroll-speed='0.2' className='text-[#1D1D1D] text-[1rem] md:text-[1vw] leading-[1vw] font-[400] text-center mb-12'>ABOUT BREWDISTRICT24</h2>
      <div data-scroll data-scroll-speed='0.2' className='text-[#1D1D1D] text-[2rem] md:text-[4vw] leading-[2rem] md:leading-[6vw] font-[400] text-center custom-font px-10 mb-0 md:mb-12'>
      WELCOME TO THE NEIGHBORHOOD. THIS IS WHERE WE COME TOGETHER AS ONE.
      </div>
      <div data-scroll data-scroll-speed='0.2' className='flex flex-col md:flex-row gap-8 md:gap-3 justify-between w-[80%]'>
        <p className='text-[#1D1D1D] custom-font1 text-[0.5rem] md:text-[1vw]'>In good company, we immerse ourselves in ‘gezelligheid’. Together we laugh, drink beer and open ourselves up to new surprising experiences. We give way to all our senses so we can connect to a world that is packed with taste.</p>
      <p className='text-[#1D1D1D] custom-font1 text-[0.5rem] md:text-[1vw]'>Our classic craft beers are brewed without fuss. With water, grain, yeast and hops, we return to the essence where the most diverse and authentic flavors are created. Pure and honest. Damn delicious.</p>
      </div>
        <div data-scroll data-scroll-speed='0.05' className='w-[80vw] h-[1px] bg-black mt-[3rem]'></div>
        </div>
    </div>
  )
}

export default Section2