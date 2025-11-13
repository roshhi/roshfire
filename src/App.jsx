import Navbar from "./components/navbar"
import Hero from "./components/hero"
import WeaponCategories from "./components/WeaponCategories"
import Order from "./components/Order"
import Services from "./components/Services"
import ProductVideo from "./components/ProductVideo"
import Testimonials from "./components/Testimonial"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <div className="bg-[rgb(10,10,10)]">
        <Navbar/>
        <Hero/>
      </div>
      <WeaponCategories/>
      <Order/>
      <Services/>
      <ProductVideo/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
