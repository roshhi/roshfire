import hero_gun from '../assets/images/hero-gun.jpg';
import { motion } from 'framer-motion';
import { Navigate, useNavigate } from 'react-router';

export default function Hero() {
    
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const navigate = useNavigate();

  const itemVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const itemVariants2 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible" 
      variants={containerVariants}
      className="flex flex-col md:flex-row items-center pb-[50px] md:pb-[150px]"
    >
      <motion.div
        variants={itemVariants}
        className="mt-[40px] ml-[3.2vw] flex flex-col gap-1"
      >
        <div className="flex gap-1 md:mediumResFont xl:largeResFont">
          <p className="text-[#9AA1AC]">Welcome to</p>
          <p className="text-[#DFB159]">ROSHFIRE</p>
        </div>
        <div className="text-white font-bold xLargeResFont md:xxLargeResFont xl:xxxLargeResFont">
          <p className="m-0 leading-tight">Secure Platform</p>
          <p className="m-0 leading-tight">For Guns</p>
        </div>
        <p className="text-[#9AA1AC] xsmallResFont w-[90vw] mt-3 md:w-[50vw] lg:w-[40vw] xl:mediumResFont">
          At ROSHFIRE, we believe every weapon tells a story. Explore our
          handpicked collection of premium arms designed to deliver
          unmatched craftsmanship and performance.
        </p>
        <button onClick={()=>navigate("/shop")} className="bg-[#DFB159] border border-[#DFB159] w-[100px] p-1 rounded-[5px] mt-3 text-white lg:w-[120px] lg:h-[80%] lg:p-2 lg:font-semibold xl:w-[150px] xl:mediumResFont xl:font-semibold hover:bg-transparent hover:text-[#DFB159] transition-colors delay-50">
          Get Started
        </button>
      </motion.div>

      <motion.div variants={itemVariants2} className="mt-8 pb-8">
        <img src={hero_gun} alt="A Pistol" className="md:h-[40vh] xl:h-[55vh]" />
      </motion.div>
    </motion.div>
  );
}
