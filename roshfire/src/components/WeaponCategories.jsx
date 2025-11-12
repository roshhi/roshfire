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
        {src: pistol3, name:'REVOLVER 686'},
        {src: pistol4, name:'BERETTA 92'},
        {src: pistol5, name:'GLOCK 17'},
        {src: pistol6, name:'GLOCK 19'},
    ];
    const rifles = [
        {src: rifle1, name:'BERETTA M9'},
        {src: rifle2, name:'COLT 1911'},
        {src: rifle3, name:'REVOLVER 686'},
        {src: rifle4, name:'BERETTA 92'},
        {src: rifle5, name:'GLOCK 17'},
        {src: rifle6, name:'GLOCK 19'},
    ];

    return (
        <div className="relative bottom-[50px]">
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
                <div className="weaponGrid grid grid-cols-3 gap-4 ml-4 bg-white pt-5 lg:grid-cols-6">
                    {
                        selected === "handgun" && pistols.map((pistol)=>{
                            return(
                                <div key={pistol.name} className="grid place-items-center border">
                                    <img src={pistol.src} alt={pistol.name + " image"} />
                                    <p>{pistol.name}</p>
                                </div>
                            )
                        })
                    }
                    {
                        selected === "rifle" && rifles.map((rifle)=>{
                            return(
                                <div key={rifle.name} className="grid place-items-center border">
                                    <img src={rifle.src} alt={rifle.name + " image"} />
                                    <p>{rifle.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}



