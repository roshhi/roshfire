import Navbar from "./components/navbar"
import Hero from "./components/hero"
import WeaponCategories from "./components/WeaponCategories"
import Order from "./components/Order"
import Services from "./components/Services"
import ProductVideo from "./components/ProductVideo"
import Testimonials from "./components/Testimonial"
import Footer from "./components/Footer"
import { useRef } from "react";

export default function App() {

  const weaponRef = useRef(null);
  const orderRef = useRef(null);
  const servicesRef = useRef(null);
  const videoRef = useRef(null);
  const testimonialRef = useRef(null);

  return (
    <>
      <div className="bg-[rgb(10,10,10)]">
        <Navbar weaponRef={weaponRef} orderRef={orderRef} servicesRef={servicesRef} videoRef={videoRef} testimonialRef={testimonialRef} />
        <Hero/>
      </div>
      <div ref={weaponRef}>
        <WeaponCategories/>
      </div>

      <div ref={orderRef}>
        <Order/>
      </div>

      <div ref={servicesRef}>
        <Services/>
      </div>

      <div ref={videoRef}>
        <ProductVideo/>
      </div>

      <div ref={testimonialRef}>
        <Testimonials/>
      </div>
      <Footer/>
    </>
  )
}
