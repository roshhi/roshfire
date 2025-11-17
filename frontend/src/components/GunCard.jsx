import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { useState,useEffect } from "react";
import { auth } from "../firebase/firbaseConfigFile";

export default function GunCard({
        title,
        brand,
        image,
        price,
        oldPrice
}){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser); // null if logged out, user object if logged in
        });
        return () => unsubscribe(); // cleanup listener
    }, []);

    const [qty, setQty] = useState(0);
    const handleAddToCart = () => {
      if (!user) {
        navigate('/login');
        return;
      }
      setQty(1);
    };

    return(
            <div className=" bg-white rounded-lg overflow-hidden relative">
                <div className="relative w-full aspect-[1/1]">
                    <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#DFB159] text-white text-sm font-medium px-3 py-1 rounded-md">
                    SALE
                    </span>
                </div>
                <div className="p-5">
                    <h3 className="text-center text-sm text-gray-500 smallResFont truncate whitespace-nowrap">{brand}</h3>
                    <p className="mt-2 text-center font-serif text-sm font-semibold leading-1 text-gray-900 truncate whitespace-nowrap">
                    {title}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-between ml-5 mr-5">
                    <div className="flex items-center mt-1 flex-col pb-2">
                        <span className="line-through text-gray-400 smallResFont">{oldPrice}</span>
                        <span className="text-[#DFB159] font-bold text-lg">{price}</span>
                    </div>
                    <div className="pb-5">
                        {qty === 0 ? (
                            // Show Add To Cart button
                            <button
                            className="w-full bg-[#DFB159] border-[#DFB159] border-2 hover:bg-transparent hover:text-black transition rounded-xl p-2 font-semibold text-white"
                            onClick={handleAddToCart}
                            >
                            Add To Cart
                            </button>
                        ) : (
                            // Show + - buttons
                            <div className="flex items-center justify-center gap-3">
                            <button
                                className="px-3 py-1 bg-[#DFB159] rounded-xl font-bold"
                                onClick={() => setQty(qty + 1)}
                            >
                                +
                            </button>

                            <span className="font-semibold text-lg">{qty}</span>

                            <button
                                className="px-3 py-1 bg-[#DFB159] rounded-xl font-bold"
                                onClick={() => setQty(qty > 1 ? qty - 1 : 0)}
                            >
                                -
                            </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>       
    )
}