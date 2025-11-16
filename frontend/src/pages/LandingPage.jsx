import Hero from "../components/hero"
import WeaponCategories from "../components/WeaponCategories"
import Order from "../components/Order"
import Services from "../components/Services"
import ProductVideo from "../components/ProductVideo"
import Testimonials from "../components/Testimonial"

export default function LandingPage({weaponRef,orderRef,servicesRef,videoRef,testimonialRef}){

  return(
      <>
      <div className="bg-[rgb(10,10,10)]">
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
    </>
  )
}
