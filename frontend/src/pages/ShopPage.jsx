import React from "react";
import GunCard from "../components/GunCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useCart from "../hooks/useCart";

export default function ShopPage({ setCart, cart }) {
  const [weapons, setWeapons] = useState([]);
  const [weaponsLoading, setWeaponsLoading] = useState(true);
  const { loading } = useCart();

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/`);
        const data = await response.json();
        setWeapons(data);
      } catch (error) {
        console.error("Error fetching weapons:", error);
      } finally {
        setWeaponsLoading(false);
      }
    };
    fetchWeapons();
  }, []);

  if (loading || weaponsLoading) {
    return (
      <div className="bg-[rgb(10,10,10)] min-h-[calc(100vh-500px)] grid">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="bg-[rgb(10,10,10)]">
      <motion.div className="relative p-2 pt-10 md:pt-20 md:p-10 min-h-screen grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {weapons.map((weapon) => {
          const [oldP, newP] = weapon.price.split(" ");

          return (
            <motion.div
              key={weapon._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.2 * weapons.indexOf(weapon),
              }}
            >
              <GunCard
                title={weapon.title}
                brand={weapon.pagecats[0]}
                price={newP}
                oldPrice={oldP}
                image={weapon.img}
                setCart={setCart}
                cart={cart}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
