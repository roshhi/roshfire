import { FaTrash } from "react-icons/fa";

export default function CartItem({
  title,
  price,
  image,
  qty,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  return (
    <div>
      <div className="w-[90vw] lg:w-[55vw] mb-5 bg-[rgb(10,10,10)] border-[1px] border-[#DFB159] rounded-2xl p-4 flex flex-row md:flex-row gap-6 relative">
        <div className="w-1/3 max-h-[150px] rounded-xl">
          <img src={image} alt={title} className="rounded-lg max-h-[150px] " />
        </div>

        <div className="w-2/3">
          <h2 className="text-gray-400 medium font-semibold">{title}</h2>
          <p className="text-[#DFB159] largeResFont font-bold mt-1">
            Rs {price}
          </p>
          <div className="flex justify-between items-center mt-6 gap-6 flex-wrap">
            <div className="flex items-center gap-4 ">
              <button
                className="w-[35px] h-[35px] border border-[#1f2937] rounded-md flex items-center justify-center text-gray-300 hover:bg-[#1f2937]"
                onClick={() => decreaseQty(title)}
              >
                –
              </button>
              <span className="text-[#DFB159] text-xl">{qty}</span>

              <button
                className="w-[35px] h-[35px]  border border-[#1f2937] rounded-md flex items-center justify-center text-xl text-gray-300 hover:bg-[#1f2937]"
                onClick={() => increaseQty(title)}
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(title)}
              className=" bg-red-700 hover:bg-black border-2 border-red-700 text-white rounded-xl p-2"
            >
              <FaTrash />
            </button>
          </div>

          <div className="mt-6 border-t border-[#1f2937] pt-4 flex justify-between">
            <p className="text-gray-400">Subtotal:</p>
            <p className="text-[#DFB159] mediumResFont font-bold">
              Rs {price * qty}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
