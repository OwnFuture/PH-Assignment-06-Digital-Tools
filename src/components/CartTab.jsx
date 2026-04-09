import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify';


const CartTab = ({carts,setcarts}) => {

    const totalPrice=carts.reduce((sum,item)=>sum+item.price,0);

    const handleRemove=(item)=>{
        const filteredArray=carts.filter(c=>c.id !== item.id);
        setcarts(filteredArray)
        toast.error("Cart Removed")
    }

    const handleCheckout=()=>{
        setcarts([])
        toast.warning("Cart is cleared")
    }

    return (

       <div className='w-[90%] sm:w-[85%] lg:w-[80%] mx-auto mt-10 border border-gray-200 shadow-md rounded-lg p-4 sm:p-6'>

    
        <div>
            <h3 className='font-semibold text-2xl sm:text-3xl lg:text-4xl mb-5'>
            Your Cart</h3>
        </div>

    
    {
        carts.length === 0 ? (
            <div className='font-semibold text-xl sm:text-2xl lg:text-3xl text-center text-red-700 flex justify-center items-center gap-2'>
                <FaShoppingCart className="text-2xl sm:text-3xl" />
                <span>Empty Cart</span>
            </div>
        ) : (

            carts.map(cart => (
                <div key={cart.id}>

                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-gray-200 shadow-md rounded-lg p-4 sm:p-6 mb-4'>

                        
                        <div className='flex gap-3 items-center'>
                            <img 
                                className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover' 
                                src={cart.icon} 
                                alt={cart.name} 
                            />
                            <div>
                                <h4 className='text-base sm:text-lg font-semibold'>
                                    {cart.name}
                                </h4>
                                <p className='text-sm sm:text-base'>
                                    ${cart.price}
                                </p>
                            </div>
                        </div>

                        
                        <div className='w-full sm:w-auto'>
                            <button onClick={()=>handleRemove(cart)} className='text-red-700 btn w-full sm:w-auto'>
                                Remove
                            </button>
                        </div>

                    </div>

                </div>
            ))
        )
    }

    
    <div className='mt-5 flex justify-between items-center border border-gray-200 shadow-md rounded-lg p-4 sm:p-6'>

        <p className='font-semibold text-xl sm:text-2xl lg:text-3xl'>
            Total
        </p>
        <p className='font-semibold text-lg sm:text-xl'>
            ${totalPrice}
        </p>
    </div>

   
    <div className='mt-4'>
        <button onClick={handleCheckout} className='btn w-full text-base sm:text-lg lg:text-xl py-3 sm:py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white'>
            Proceed to Checkout
        </button>
    </div>

</div>
    );
};

export default CartTab;