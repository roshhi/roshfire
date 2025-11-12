import { LuChevronDown } from "react-icons/lu";
import { useState } from "react";

export default function Navbar(){

    const [selected,setSelected] = useState("home")
    const links = [
        { name: "home", label: "Home", icon: true },
        { name: "shop", label: "Shop" },
        { name: "about", label: "About Us" },
        { name: "contact", label: "Contact Us" },
      ];

    return(
        <>
            <div className=" relative h-[50px] flex items-center justify-center pt-7 md:pt-[50px] xl:flex xl:justify-evenly ">
                <div className=" absolute left-0 ml-[3.2vw] flex items-center h-[100%] text-[#9AA1AC] gap-1">
                    <div className="flex items-center extraSmallResFont m-0 p-0 md:smallResFont">
                        <p className="m-0 p-0 ">ENG</p>
                        <LuChevronDown size={16} />
                    </div>
                    <div className="w-[1px] h-[35%] bg-[#9AA1AC]"></div>
                    <div className="flex items-center extraSmallResFont md:smallResFont">
                        <p>USD</p>
                        <LuChevronDown size={16} />
                    </div>
                </div>  
                <div className="text-[#9AA1AC] orbitron-font largeResFont md:xLargeResFont lg:xxLargeResFont">
                    ROSHFIRE
                </div>
                <div className="text-[rgb(10,10,10)] h-[100%] flex-center absolute right-4 lg:mr-[3.2vw]">
                    <button className="bg-[#DFB159] h-[60%] w-[70px] rounded-[5px] text-white lg:w-[120px] lg:h-[80%] lg:p-1 lg:font-semibold xl:w-[150px] xl:h-[90%] xl:font-semibold xl:mediumResFont">Login</button>
                </div>
            </div>

            <div className=" h-[50px] border-t border-b border-[#9AA1AC] mt-8 flex items-center justify-evenly md:flex-center md:gap-[80px] lg:mt-11 lg:smallResFont xl:mediumResFont">
                {
                    links.map((link)=>{
                        return(
                            <div
                                key={link.name}
                                className={`flex items-center gap-1 cursor-pointer transition-all duration-200 ${selected === link.name ? "selectedOptionNavbar" : "text-[#9AA1AC]" }`}
                                onClick={()=> setSelected(link.name)}
                            >
                                <p>{link.label}</p>
                                {link.icon && <LuChevronDown size={16} />}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}