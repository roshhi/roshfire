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

            <div className=" relative h-[50px] flex items-center justify-center mt-7">
                <div className=" absolute left-4 flex items-center h-[100%] text-[#9AA1AC] gap-1">
                    <div className="flex items-center extraSmallResFont m-0 p-0">
                        <p className="m-0 p-0">ENG</p>
                        <LuChevronDown size={16} />
                    </div>
                    <div className="w-[1px] h-[50%] bg-[#9AA1AC]"></div>
                    <div className="flex items-center extraSmallResFont">
                        <p>USD</p>
                        <LuChevronDown size={16} />
                    </div>
                </div>  
                <div className="text-[#9AA1AC] orbitron-font largeResFont">
                    ROSHFIRE
                </div>
                <div className="text-[rgb(10,10,10)] h-[100%] flex-center absolute right-4">
                    <button className="bg-[#2FDBFE] h-[60%] w-[70px] rounded-[5px]">Login</button>
                </div>
            </div>

            <div className=" h-[50px] border-t border-b border-[#9AA1AC] mt-4 flex items-center justify-evenly">
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