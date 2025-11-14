import { useState } from "react";
import p1 from '../assets/images/product1.jpg'
import p2 from '../assets/images/product2.jpg'
import p3 from '../assets/images/product3.jpg'

import { FaPlayCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion"

export default function ProductVideo(){
    const [playingIndex, setPlayingIndex] = useState(null);
    const containerVariants={
        hidden:{},
        visible:{
            transition: {
                staggerChildren: 0.25,
            },
        }
    }
    const itemsVariants={
        hidden:{opacity:0,y:350,transition: { duration: 0.8 }},
        visible:{opacity:1,y:0,transition: { duration: 0.8 }}
    }

    return(
        <div className="flex-col gap-1 flex-center mb-[80px]">
            <h1 className="largeResFont text-center">OUR PRODUCT VIDEO</h1>
            <p className="text-center text-gray-400 md:pl-5 md:pr-5">See our top-selling firearms in action. Watch detailed reviews, demonstrations, 
                and usage guides to make the most informed decision before you buy
            </p>

            <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="grid gap-5 items-center mt-5 p-3 lg:grid-cols-3 w-[100vw] md:w-[80vw] lg:w-[95vw]">
                <motion.div variants={itemsVariants} className="rounded-lg overflow-hidden w-[100%] h-[300px]">
                    {playingIndex==0 ? (
                        <iframe
                            src="https://www.youtube.com/embed/dM23JPTAqOg?autoplay=1"
                            title="YouTube video"
                            allow="autoplay"
                            className="w-[100%] h-[100%] rounded-lg"
                            >
                        </iframe>
                    ) : (
                        <div className="relative w-[100%] h-[100%] transform hover:translate-y-[-5px] transition-transform duration-300">
                            <img
                                src={p1}
                                alt="Custom Thumbnail"
                                className="w-full h-full object-fill rounded-lg"
                            />
                            <div className="absolute inset-0 flex-center" >
                                <div className="group bg-black/50 rounded-full cursor-pointer " onClick={() => setPlayingIndex(0)}>
                                    <FaPlayCircle className="text-[#DFB159] text-[70px] transition-all duration-300 ease-in-out group-hover:text-[80px]"/>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
                <motion.div variants={itemsVariants} className="rounded-lg overflow-hidden w-[100%] h-[300px]">
                    {playingIndex==1 ? (
                        <iframe
                            src="https://www.youtube.com/embed/h8l2wpXAcCc?autoplay=1"
                            allow="autoplay"
                            title="YouTube video"
                            className="w-[100%] h-[100%] rounded-lg"
                            >
                        </iframe>
                    ) : (
                        <div className="relative w-[100%] h-[100%] transform hover:translate-y-[-5px] transition-transform duration-300">
                            <img
                                src={p2}
                                alt="Custom Thumbnail"
                                className="w-full h-full object-fill"
                            />
                            <div className="absolute inset-0 flex-center" >
                                <div className="group bg-black/50 rounded-full cursor-pointer " onClick={() => setPlayingIndex(1)}>
                                    <FaPlayCircle className="text-[#DFB159] text-[70px] transition-all duration-300 ease-in-out group-hover:text-[80px]"/>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
                <motion.div variants={itemsVariants} className="rounded-lg overflow-hidden w-[100%] h-[300px]">
                    {playingIndex==2 ? (
                        <iframe
                            src="https://www.youtube.com/embed/HtwVDjapTU8?autoplay=1"
                            title="YouTube video"
                            allow="autoplay"
                            className="w-[100%] h-[100%] rounded-lg"
                            >
                        </iframe>
                    ) : (
                        <div className="relative w-[100%] h-[100%] transform hover:translate-y-[-5px] transition-transform duration-300">
                            <img
                                src={p3}
                                alt="Custom Thumbnail"
                                className="w-full h-full object-fill"
                            />
                            <div className="absolute inset-0 flex-center" >
                                <div className="group bg-black/50 rounded-full cursor-pointer " onClick={() => setPlayingIndex(2)}>
                                    <FaPlayCircle className="text-[#DFB159] text-[70px] transition-all duration-300 ease-in-out group-hover:text-[80px]"/>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </motion.div>

            <div className="flex-center bg-[#DFB159] border border-[#DFB159] w-[130px] p-2 rounded-[5px] mt-3 text-white lg:w-[130px] lg:h-[80%] lg:p-2 lg:font-semibold xl:w-[160px] xl:mediumResFont xl:font-semibold hover:bg-transparent hover:text-[#DFB159] transition-colors delay-50">
                <button>SUBSCRIBE</button>
                <FiChevronRight/>
            </div>            
        </div>
    )
}


