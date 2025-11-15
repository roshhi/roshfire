import orderGun from "../assets/images/gun-order.png"
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion"


export default function Order(){

    const containerVariants={
        hidden:{},
        visible:{
            transition: {
                staggerChildren: 0.25,
            },
        }
    }
    const itemsVariants={
        hidden:{opacity:0,y:150,transition: { duration: 0.8 }},
        visible:{opacity:1,y:0,transition: { duration: 0.8 }}
    }
    return (

        <div className={`bg-[url("./assets/images/featuredOffered.png")] bg-cover bg-center bg-no-repeat`}>
            <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className=" bg-black/80 md:flex items-center justify-center w-[100vw] p-3 pt-[50px] pb-[50px] gap-3">
                <motion.div variants={itemsVariants}  className="md:w-[50%] flex-center" >
                    <img className="w-[90%] md:w-[100%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%] h-auto " src= {orderGun} alt="Gun with Bullets" />
                </motion.div>
                <motion.div variants={itemsVariants} className="ml-3 flex flex-col gap-1 md:w-[40%] mt-5">
                        <p className="xLargeResFont xl:xxxLargeResFont font-bold text-white">HOW TO ORDER</p>
                        <p className="text-gray-400 smallResFont font-bold">NOTHING EVER WAS THIS EASY! PICK A FIREARM AND CHECK OUT WITH YOUR OWN ADDRESS</p>
                        <p className="smallResFont font-medium xl:text-md text-[#DFB159]">We've made ordering simple and secure.
                                    Choose your product, complete checkout, and receive tracking details once your order ships.
                                    Our team ensures every item is safely packaged and delivered on time.
                        </p>
                        <div>
                            <p className="largeResFont font-medium text-white">$2775.00</p>
                            <div className="flex-center bg-[#DFB159] border border-[#DFB159] w-[130px] p-2 rounded-[5px] mt-3 text-white lg:w-[130px] lg:h-[80%] lg:p-2 lg:font-semibold xl:w-[160px] xl:mediumResFont xl:font-semibold hover:bg-transparent hover:text-[#DFB159] transition-colors delay-50">
                                <button>SHOP NOW</button>
                                <FiChevronRight/>
                            </div>
                        </div>
                </motion.div>
            </motion.div>
        </div>
        
    )
}