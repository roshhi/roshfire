import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

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
        <Route path="/login" element={
          <LoginPage/>
        }/>
        <Route path="/signup" element={
          <SignUpPage/>
        }/>
      </Routes>
      <Footer/>
    </Router>
  )
}
