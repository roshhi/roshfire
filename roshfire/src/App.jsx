import Navbar from "./components/navbar"
import Hero from "./components/hero"
import WeaponCategories from "./components/WeaponCategories"
import Order from "./components/Order"

export default function App() {
  return (
    <>
      <div className="bg-[rgb(10,10,10)]">
        <Navbar/>
        <Hero/>
      </div>
      <WeaponCategories/>
      <Order/>
    </>
  )
}
