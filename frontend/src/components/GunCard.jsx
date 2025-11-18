import { useNavigate } from "react-router";
import useCart from "../hooks/useCart";

export default function GunCard({ title, brand, image, price, oldPrice }) {
  const { user, cart, addItem, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const cartItem = cart.find((item) => item.title === title); // Finds the given item via its title and sets its qty
  const qty = cartItem ? cartItem.qty : 0;

  const handleAddToCart = async () => {
    if (!user) {
      return navigate("/login");
    }
    addItem(image, title, price);
  };

  return (
    <div className=" bg-black border-2 border-[#DFB159] rounded-lg overflow-hidden relative transform transition-all duration-300 hover:translate-y-[-10px]">
      <div className="relative w-full aspect-[1/1]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-[#DFB159] text-white text-sm font-medium px-3 py-1 rounded-md">
          SALE
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-center text-sm text-gray-300 font-bold smallResFont truncate whitespace-nowrap">
          {brand}
        </h3>
        <p className="mt-2 text-center font-serif text-sm font-semibold leading-1 text-gray-400 truncate whitespace-nowrap">
          {title}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between ml-5 mr-5">
        <div className="flex items-center mt-1 flex-col pb-2">
          <span className="line-through text-white smallResFont">
            {oldPrice}
          </span>
          <span className="text-[#DFB159] font-bold text-lg">{price}</span>
        </div>
        <div className="pb-5">
          {qty === 0 ? (
            <button
              className="w-full bg-[#DFB159] border-[#DFB159] border-2 hover:bg-transparent transition rounded-xl p-2 font-semibold text-white"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <button
                className="px-3 py-1 bg-[#DFB159] rounded-xl font-bold"
                onClick={() => increaseQty(title)}
              >
                +
              </button>

              <span className="font-semibold text-lg text-white">{qty}</span>

              <button
                className="px-3 py-1 bg-[#DFB159] rounded-xl font-bold"
                onClick={() => decreaseQty(title)}
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
