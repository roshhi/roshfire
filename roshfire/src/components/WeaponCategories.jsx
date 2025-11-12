import { useState } from "react"
import pistol1 from '../assets/images/pistol1.png'
import pistol2 from '../assets/images/pistol2.png'
import pistol3 from '../assets/images/pistol3.png'
import pistol4 from '../assets/images/pistol4.png'
import pistol5 from '../assets/images/pistol5.png'
import pistol6 from '../assets/images/pistol6.png'
import rifle1 from '../assets/images/rifle1.png'
import rifle2 from '../assets/images/rifle2.png'
import rifle3 from '../assets/images/rifle3.png'
import rifle4 from '../assets/images/rifle4.png'
import rifle5 from '../assets/images/rifle5.png'
import rifle6 from '../assets/images/rifle6.png'
import shotgun1 from '../assets/images/shotgun1.png'
import shotgun2 from '../assets/images/shotgun2.png'
import shotgun3 from '../assets/images/shotgun3.png'
import shotgun4 from '../assets/images/shotgun4.png'
import shotgun5 from '../assets/images/shotgun5.png'
import shotgun6 from '../assets/images/shotgun6.png'
import silencer1 from '../assets/images/s1.png'
import silencer2 from '../assets/images/s2.png'
import silencer3 from '../assets/images/s3.png'
import silencer4 from '../assets/images/s4.png'
import silencer5 from '../assets/images/s5.png'
import silencer6 from '../assets/images/s6.png'
import knife1 from '../assets/images/k1.png'
import knife2 from '../assets/images/k2.png'
import knife3 from '../assets/images/k3.png'
import knife4 from '../assets/images/k4.png'
import knife5 from '../assets/images/k5.png'
import knife6 from '../assets/images/k6.png'



export default function WeaponCategories(){
    
    const [selected,setSelected] = useState("handgun");
    const categories = [
        {name: 'handgun',label:'HANDGUNS'},
        {name: 'rifle',label:'RIFLES'},
        {name: 'shotguns',label:'SHOTGUNS'},
        {name: 'silencers',label:'SILENCERS'},
        {name: 'knives',label:'KNIVES'}   
    ]
    const pistols = [
        {src: pistol1, name:'BERETTA M9'},
        {src: pistol2, name:'COLT 1911'},
        {src: pistol3, name:'REVOLVER'},
        {src: pistol4, name:'BERETTA 92'},
        {src: pistol5, name:'GLOCK 17'},
        {src: pistol6, name:'GLOCK 19'},
    ];
    const rifles = [
        {src: rifle1, name:'M4 CARBINE'},
        {src: rifle2, name:'AK-47'},
        {src: rifle3, name:'HK G36'},
        {src: rifle4, name:'MK 18'},
        {src: rifle5, name:'SAIGA MK'},
        {src: rifle6, name:'CZ SCORPION'},
    ];
    const shotguns = [
        {src: shotgun1, name:'MOSSBERG 590'},
        {src: shotgun2, name:'REMINGTON 870'},
        {src: shotgun3, name:'WINCHESTER SXP'},
        {src: shotgun4, name:'MAVERICK 88'},
        {src: shotgun5, name:'WINGMASTER 870'},
        {src: shotgun6, name:'WINCHESTER MARINE'},
    ];
    const silencers = [
        {src: silencer1, name:'OSPREY'},
        {src: silencer2, name:'OBSIDION'},
        {src: silencer3, name:'WOLFMAN'},
        {src: silencer4, name:'ERECTOR 9'},
        {src: silencer5, name:'BANISH 45'},
        {src: silencer6, name:'TI-RANT'},
    ];
    const knifes = [
        {src: knife1, name:'KA-BAR'},
        {src: knife2, name:'FAIRBAIRN'},
        {src: knife3, name:'KUKRI'},
        {src: knife4, name:'GERBER MARK'},
        {src: knife5, name:'STILETTO'},
        {src: knife6, name:'YARBOROUGH'},
    ];

    return (
        <div className="relative bottom-[60px] md:bottom-[70px] lg:bottom-[80px] xl:bottom-[100px]">
            <div className="flex items-center justify-center flex-col w-[90%] mx-auto bg-white">
                <div className="grid grid-cols-5 place-items-center w-[100%]  text-white extraSmallResFont h-[35px] font-medium">
                    {
                        categories.map((items)=>{
                            return(
                                <p
                                    key={items.name}
                                    className= {`h-[100%] w-[100%] flex-center transition-all duration-200 cursor-pointer md:smallResFont ${selected === items.name ? "bg-white text-[#DFB159]" :"bg-[#DFB159]" }`}
                                    onClick={()=>setSelected(items.name)}
                                >
                                    {items.label}
                                </p>
                            )
                        })
                    }
                </div>
                <div className="weaponGrid grid grid-cols-3 gap-4 ml-4 bg-white pt-5 lg:grid-cols-6 mt-5">
                    {
                        selected === "handgun" && pistols.map((pistol)=>{
                            return(
                                <div key={pistol.name} className="grid place-items-center border-2 hover:border-yellow-500 hover:bg-[#f7dba7] rounded-sm transform hover:translate-y-[-10px] transition-transform duration-300 hover:font-bold">
                                    <img src={pistol.src} alt={pistol.name + " image"} />
                                    <p className="smallResFont mt-5">{pistol.name}</p>
                                </div>
                            )
                        })
                    }
                    {
                        selected === "rifle" && rifles.map((rifle)=>{
                            return(
                                <div key={rifle.name} className="grid place-items-center border-2 hover:border-yellow-500 rounded-sm transform hover:translate-y-[-10px] hover:bg-[#f7dba7] transition-transform duration-300 hover:font-bold">
                                    <img src={rifle.src} alt={rifle.name + " image"} />
                                    <p className="smallResFont mt-5">{rifle.name}</p>
                                </div>
                            )
                        })
                    }
                    {
                        selected === "shotguns" && shotguns.map((shotgun)=>{
                            return(
                                <div key={shotgun.name} className="grid place-items-center border-2 hover:border-yellow-500 rounded-sm transform hover:translate-y-[-10px] hover:bg-[#f7dba7] transition-transform duration-300 hover:font-bold">
                                    <img src={shotgun.src} alt={shotgun.name + " image"} />
                                    <p className="smallResFont mt-5">{shotgun.name}</p>
                                </div>
                            )
                        })
                    }
                    {
                        selected === "silencers" && silencers.map((silencer)=>{
                            return(
                                <div key={silencer.name} className="grid place-items-center border-2 hover:border-yellow-500 rounded-sm transform hover:translate-y-[-10px] hover:bg-[#f7dba7] transition-transform duration-300 hover:font-bold">
                                    <img className="!p-5" src={silencer.src} alt={silencer.name + " image"} />
                                    <p className="smallResFont mt-5">{silencer.name}</p>
                                </div>
                            )
                        })
                    }
                    {
                        selected === "knives" && knifes.map((knife)=>{
                            return(
                                <div key={knife.name} className="grid place-items-center border-2 hover:border-yellow-500 rounded-sm transform hover:translate-y-[-10px] hover:bg-[#f7dba7] transition-transform duration-300 hover:font-bold">
                                    <img className="!p-5" src={knife.src} alt={knife.name + " image"} />
                                    <p className="smallResFont mt-5">{knife.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}



