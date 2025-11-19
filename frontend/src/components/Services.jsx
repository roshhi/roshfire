import { FaAward } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const itemsVariants = {
    hidden: { opacity: 0, y: 150, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const itemsVariants2 = {
    hidden: { opacity: 0, y: 250, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const itemsVariants3 = {
    hidden: { opacity: 0, y: 350, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const itemsVariants4 = {
    hidden: { opacity: 0, y: 450, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className='relative w-screen h-[500px] lg:h-[300px] mt-[80px] mb-[80px]  bg-cover bg-center bg-[url("./assets/images/bgOrder.png")]'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="absolute inset-0 bg-black/70 grid grid-cols-2 gap-5 p-5 lg:grid-cols-4 md:p-10"
      >
        <motion.div
          variants={itemsVariants}
          className="transform hover:translate-y-[-10px] transition-transform duration-300 group z-10 flex-center flex-col bg-white p-2 text-center rounded-sm gap-2 hover:border-4 hover:border-yellow-500"
        >
          <FaAward className="text-[40px] lg:text-[70px] mb-3 text-purple-500" />
          <p className="font-medium group-hover:font-bold ">TOP QUALITY</p>
          <p className="text-gray-400">
            Guaranteed performance and reliability
          </p>
        </motion.div>
        <motion.div
          variants={itemsVariants2}
          className="group z-10 flex-center flex-col bg-white p-2 text-center rounded-sm gap-2 hover:border-4 hover:border-yellow-500 transform hover:translate-y-[-10px] transition-transform duration-300"
        >
          <FaMoneyBillAlt className="text-[40px] lg:text-[70px] mb-3 text-orange-500" />
          <p className="font-medium group-hover:font-bold">BEST PRICE</p>
          <p className="text-gray-400">
            Unbeatable value without compromising on excellence
          </p>
        </motion.div>
        <motion.div
          variants={itemsVariants3}
          className="group z-10 flex-center flex-col bg-white p-2 text-center rounded-sm gap-2 hover:border-4 hover:border-yellow-500 transform hover:translate-y-[-10px] transition-transform duration-300"
        >
          <FaShoppingCart className="text-[40px] lg:text-[70px] mb-3 text-blue-500" />
          <p className="font-medium group-hover:font-bold">
            100% SECURE SHOPPING
          </p>
          <p className="text-gray-400">Your data is protected by encryption</p>
        </motion.div>
        <motion.div
          variants={itemsVariants4}
          className="group z-10 flex-center flex-col bg-white p-2 text-center rounded-sm gap-2 hover:border-4 hover:border-yellow-500 transform hover:translate-y-[-10px] transition-transform duration-300"
        >
          <FaTruck className="text-[40px] lg:text-[70px] mb-3 text-yellow-400" />
          <p className="font-medium group-hover:font-bold">FAST SHIPPING</p>
          <p className="text-gray-400">
            Quick and reliable delivery to your chosen FFL dealer
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
