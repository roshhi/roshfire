import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import CartPage from "./pages/CartPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firbaseConfigFile";
import { useEffect } from "react";

export default function App() {

  const weaponRef = useRef(HTMLBodyElement);
  const orderRef = useRef(null);
  const servicesRef = useRef(null);
  const videoRef = useRef(null);
  const testimonialRef = useRef(null);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
        if (!user) {
          setCart([]);
        }
    });
    return () => unsub();
}, []);


  return (
    <Router>
      <ToastContainer/>
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
        <Route path="/home" element={
          <LandingPage
          weaponRef={weaponRef}
          orderRef={orderRef}
          servicesRef={servicesRef}
          videoRef={videoRef}
          testimonialRef={testimonialRef}
         />
        }/>
        <Route path="/shop" element={
          <ShopPage setCart={setCart} cart={cart}/>
        }/>
        <Route path="/login" element={
          <LoginPage/>
        }/>
        <Route path="/signup" element={
          <SignUpPage/>
        }/>
        <Route path="/cart" element={
          <CartPage cart={cart} setCart={setCart}/>
        }/>
      </Routes>
      <Footer/>
    </Router>
  )
}
