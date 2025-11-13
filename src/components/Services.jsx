import { FaAward } from "react-icons/fa";      
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

export default function Services(){
    return(
        <div className='relative w-screen h-[500px] lg:h-[300px] mt-[80px] mb-[80px]  bg-cover bg-center bg-[url("./assets/images/featuredOffered.png")]'>
            <div className="absolute inset-0 bg-black/50 grid grid-cols-2 gap-5 p-5 lg:grid-cols-4 md:p-10">
                <div className="group z-10 flex-center flex-col bg-white p-2 text-center rounded-sm gap-2 hover:border-4 hover:border-yellow-500 hover:translate-y-[-10px] transition-transform duration-300 ">
                    <FaAward className="text-[40px] lg:text-[70px] mb-3 text-purple-500"/>
                    <p className="font-medium group-hover:font-bold ">TOP QUALITY</p>
                    <p className="text-gray-400">Guaranteed performance and reliability</p>
                </div>
                <div className="group z-10 flex-center flex-col bg-white p-2 text-center rounded-sm gap-2 hover:border-4 hover:border-yellow-500 hover:translate-y-[-10px] transition-transform duration-300">
                    <FaMoneyBillAlt className="text-[40px] lg:text-[70px] mb-3 text-orange-500"/>
                    <p className="font-medium group-hover:font-bold">BEST PRICE</p>
                    <p className="text-gray-400">Unbeatable value without compromising on excellence</p>
                </div>
                <div className="group z-10 flex-center flex-col bg-white p-2 text-center rounded-sm gap-2 hover:border-4 hover:border-yellow-500 hover:translate-y-[-10px] transition-transform duration-300">
                    <FaShoppingCart className="text-[40px] lg:text-[70px] mb-3 text-blue-500"/>
                    <p className="font-medium group-hover:font-bold">100% SECURE SHOPPING</p>
                    <p className="text-gray-400">Your data is protected by encryption</p>
                </div>
                <div className="group z-10 flex-center flex-col bg-white p-2 text-center rounded-sm gap-2 hover:border-4 hover:border-yellow-500 hover:translate-y-[-10px] transition-transform duration-300">
                    <FaTruck className="text-[40px] lg:text-[70px] mb-3 text-yellow-400"/>
                    <p className="font-medium group-hover:font-bold">FAST SHIPPING</p>
                    <p className="text-gray-400">Quick and reliable delivery to your chosen FFL dealer</p>
                </div>
            </div>
        </div>
    )
}