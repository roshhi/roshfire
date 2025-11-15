import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {

  const weaponRef = useRef(null);
  const orderRef = useRef(null);
  const servicesRef = useRef(null);
  const videoRef = useRef(null);
  const testimonialRef = useRef(null);

  return (
    <Router>
      <div className="bg-[rgb(10,10,10)]">
        <Navbar
          weaponRef={weaponRef}
          orderRef={orderRef}
          servicesRef={servicesRef}
          videoRef={videoRef}
          testimonialRef={testimonialRef}
        />
      </div>
      <Routes>
        <Route path="/" element={
          <LandingPage
          weaponRef={weaponRef}
          orderRef={orderRef}
          servicesRef={servicesRef}
          videoRef={videoRef}
          testimonialRef={testimonialRef}
        />
        }/>
        <Route path="/shop" element={
          <ShopPage/>
        }/>
      </Routes>
      <Footer/>
    </Router>
  )
}
