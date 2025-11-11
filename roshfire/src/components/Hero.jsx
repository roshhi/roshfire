import hero_gun from '../assets/images/hero-gun.jpg'

export default function Hero(){

    return(
        <>
            <div className='flex flex-col'>
                <div className="mt-[40px] ml-4 flex flex-col gap-1">
                    <div className="flex gap-1 smallResFont">
                        <p className="text-[#9AA1AC]">Welcome to</p>
                        <p className="text-[#2FDBFE]">ROSHFIRE</p>
                    </div>
                    <div className="text-white xLargeResFont ">
                        <p className="m-0 leading-tight">Secure Platform</p>
                        <p className="m-0 leading-tight">For Guns</p>
                    </div>
                    <p className="text-[#9AA1AC] smallResFont w-[90vw] mt-3">
                        At ROSHFIRE, we believe every weapon tells a story. Explore our 
                        handpicked collection of premium arms designed to deliver 
                        unmatched craftsmanship and performance.
                    </p>
                    <button className='bg-[#2FDBFE] w-[100px] p-1 rounded-[5px] mt-3'>Get Started</button>
                </div>

                <div className='mt-8'>
                    <img src={hero_gun} alt="A Pistol" />
                </div>
            </div>
        </>
    )
}