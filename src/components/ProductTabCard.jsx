import React, { useState } from 'react';
import { toast } from 'react-toastify';


const ProductTabCard = ({card,carts,setcarts}) => {

    const [isBuy,setisBuy]=useState(false);


    const handleBuy=()=>{
        setisBuy(true)
        
        const isFound=carts.find(item=>item.id ===card.id);
        if(isFound){
            toast.error("Item is already added")
        }else{
            setcarts([...carts,card])
            toast.success("Item added to cart")
        }
    }

    return (
       <div className='w-[90%] sm:w-[85%] lg:w-[80%] mx-auto mt-12 lg:mt-20'>

    <div className="card w-full max-w-[320px] sm:max-w-90 lg:w-96 mx-auto bg-base-100 shadow-sm">

        <div className="card-body p-4 sm:p-6">

            
            <div className='flex justify-between items-center mb-3'>
                <img 
                    className='rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover' 
                    src={card.icon} 
                    alt={card.name} 
                />
                <span className="badge badge-xs sm:badge-sm badge-warning">
                    {card.tag}
                </span>
            </div>

            
            <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    {card.name}
                </h2>

                <p className="text-sm sm:text-base line-clamp-2">
                    {card.description}
                </p>

                <span className="text-lg sm:text-xl">
                    ${card.price}/{card.period}
                </span>
            </div>

            
            <ul className="mt-4 sm:mt-6 flex flex-col gap-2 text-xs sm:text-sm">
                {
                    card.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="size-4 mr-2 text-success" 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))
                }
            </ul>

            {/* Button */}
            <div className="mt-5">
                <button 
                    onClick={handleBuy}  
                    className={`btn w-full text-sm sm:text-base ${
                        isBuy ? 'btn-success' : 'btn-primary'
                    }`}
                >
                    {isBuy ? 'Added to Cart' : 'Buy Now'}
                </button>
            </div>

        </div>
    </div>

</div>
    );
};

export default ProductTabCard;