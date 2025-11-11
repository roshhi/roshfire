import hero_gun from '../assets/images/hero-gun.jpg'

export default function Hero(){

    return(
        <>
            <div className='flex flex-col md:flex-row items-center justify-evenly pb-[50px]'>
                <div className="mt-[40px] ml-4 flex flex-col gap-1">
                    <div className="flex gap-1 smallResFont md:mediumResFont xl:largeResFont">
                        <p className="text-[#9AA1AC]">Welcome to</p>
                        <p className="text-[#DFB159]">ROSHFIRE</p>
                    </div>
                    <div className="text-white font-bold xLargeResFont md:xxLargeResFont xl:xxxLargeResFont ">
                        <p className="m-0 leading-tight">Secure Platform</p>
                        <p className="m-0 leading-tight">For Guns</p>
                    </div>
                    <p className="text-[#9AA1AC] xsmallResFont w-[90vw] mt-3 md:w-[50vw] lg:w-[40vw] xl:mediumResFont ">
                        At ROSHFIRE, we believe every weapon tells a story. Explore our 
                        handpicked collection of premium arms designed to deliver 
                        unmatched craftsmanship and performance.
                    </p>
                    <button className='bg-[#DFB159] w-[100px] p-1 rounded-[5px] mt-3 text-white lg:w-[120px] lg:h-[80%] lg:p-2 lg:font-semibold xl:w-[150px] xl:p-3 xl:font-semibold'>Get Started</button>
                </div>

                <div className='mt-8 pb-8'>
                    <img src={hero_gun} alt="A Pistol" className=' md:h-[40vh] xl:h-[55vh]' />
                </div>
            </div>
        </>
    )
}