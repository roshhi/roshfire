import { FaPlus } from "react-icons/fa";

export default function GunCard({
        title,
        brand,
        image,
        price,
        oldPrice
}){

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
                    <div className="flex justify-center items-center gap-1 mt-4 flex-col">
                        <span className="line-through text-gray-400 text-sm">{oldPrice}</span>
                        <span className="text-[#DFB159] font-bold text-lg">{price}</span>
                    </div>
                </div>
                <FaPlus className="absolute bottom-1 right-1 text-[25px] text-gray-400 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-125"/>
            </div>       
    )
}