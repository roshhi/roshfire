import { HiMiniShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router";
import CartItem from "../components/Cart-ItemCard";
import useCart from "../hooks/useCart";

export default function CartPage(){

    const navigate = useNavigate();
    const { user, cart,increaseQty, decreaseQty, removeItem, loading } = useCart(); 

    if (user && loading) {
        return (
          <div className="bg-[rgb(10,10,10)] min-h-[calc(100vh-500px)] flex items-center">
            <div className="loader"></div>
          </div>
        );
      }
    
    if (cart.length === 0) {
        return(
            <div className="flex items-center justify-center flex-col gap-1 min-h-[calc(100vh-500px)] bg-[rgb(10,10,10)]">
                <HiMiniShoppingBag className="text-[100px] text-[#DFB159]" />
                <h1 className="text-gray-400 xLargeResFont font-bold ">Your Cart is Empty</h1>
                <h2 className="text-gray-200">Add some products to get started!</h2>
                <button className="bg-[#DFB159] p-2 mt-[25px] font-bold border border-[#DFB159] rounded-[5px] text-white hover:bg-transparent hover:text-[#DFB159] transition-colors delay-50 " onClick={()=>navigate('/shop')}>Continue Shopping</button>
            </div>
        )
    }

    let subTotal = 0;
    cart.map((item)=>{
        let itemPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        let itemQty = item.qty;

        subTotal = subTotal + (itemPrice*itemQty);
    })
    

    return(
        <div className="bg-[rgb(10,10,10)] min-h-[calc(100vh-500px)] flex items-center justify-center flex-col">
            {
                (
                    <div className="pt-10 flex flex-col items-center lg:items-start lg:pl-10 lg:pr-10 lg:flex-row lg:gap-5">
                        <div>
                            {
                                cart.map((item)=>{
                                    return(
                                        <CartItem key={item.title} image={item.image} title={item.title} price={parseFloat(item.price.replace(/[^0-9.]/g, ''))} qty={item.qty} increaseQty={increaseQty} decreaseQty={decreaseQty} removeItem={removeItem}/>
                                    )
                                })
                            }
                        </div>
                        <div className="w-[90vw] lg:w-[35vw] bg-[rgb(10,10,10)] p-6 rounded-2xl shadow-lg border border-gray-400 mb-10">
                            <h2 className="text-gray-400 xLargeResFont font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-300">
                                    <span>Subtotal</span>
                                    <span className="text-[#DFB159]">Rs {subTotal}</span>
                                </div>

                                <div className="flex justify-between text-gray-300">
                                    <span>Shipping</span>
                                    <span className="text-blue-400 font-semibold">FREE</span>
                                </div>


                                <div className="flex justify-between text-gray-300">
                                    <span>Tax (estimated)</span>
                                    <span className="text-[#DFB159]">Rs 2197</span>
                                </div>

                                <hr className="border-gray-700 my-4" />
                                
                                <div className="flex justify-between text-xl font-bold text-gray-300 ">
                                    <span>Total</span>
                                    <span className="text-green-500">Rs {subTotal+2197}</span>
                                </div>
                            </div>

                            <button 
                            className="border-2 border-[#DFB159] w-full mt-6 bg-[#DFB159] hover:bg-transparent text-white font-semibold py-3 rounded-xl transition"
                            onClick={()=>navigate('/home')}
                            >
                                Proceed to Checkout
                            </button>

                            <button 
                            className="w-full mt-4 text-gray-300 hover:text-[#DFB159] font-medium"
                            onClick={()=>navigate('/shop')}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

