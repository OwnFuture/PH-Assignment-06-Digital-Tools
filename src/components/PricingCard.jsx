import React, { use } from 'react';

const PricingCard = ({pricingDataPromise}) => {

    const pricingCards=use(pricingDataPromise);
    return (
        <div className='mb-12 sm:mb-16 lg:mb-20'>

                    <div className='w-[90%] sm:w-[85%] lg:w-[80%] mx-auto'>

                        
                        <div className='space-y-3 mb-8 sm:mb-10'>
                            <h3 className='font-semibold text-2xl sm:text-3xl text-center'>
                                Simple, Transparent Pricing
                            </h3>
                            <p className='text-center text-xs sm:text-sm'>
                                Choose the plan that fits your needs. Upgrade or downgrade anytime.
                            </p>
                        </div>

                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6'>

                            {
                                pricingCards.map(pricingCard => (
                                    <div 
                                        key={pricingCard.id} 
                                        className={`card w-full max-w-[320px] sm:max-w-90 lg:w-96 mx-auto
                                        ${pricingCard.id===2 
                                            ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-xl scale-[1.03]' 
                                            : 'bg-base-100 shadow-sm'
                                        }`}
                                    >

                                        <div className="card-body flex flex-col justify-between p-5 sm:p-6">

                                            
                                            <div className="h-5 mb-2">
                                                {
                                                    pricingCard.id === 2 && (
                                                        <span className="badge badge-xs badge-warning">
                                                            Popular
                                                        </span>
                                                    )
                                                }
                                            </div>

                                            
                                            <div className="flex justify-between items-center">
                                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                                                    {pricingCard.title}
                                                </h2>
                                                <span className="text-lg sm:text-xl">
                                                    ${pricingCard.price}
                                                </span>
                                            </div>

                                            
                                            <ul className="mt-4 sm:mt-6 flex flex-col gap-2 text-xs sm:text-sm">
                                                {
                                                    pricingCard.features.map((feature, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                                className={`size-4 mr-2 ${pricingCard.id===2 ? 'text-white' : 'text-success'}`} 
                                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                                    d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>

                                            
                                            <div className="mt-5">
                                                <button 
                                                    className={`btn w-full text-sm sm:text-base 
                                                    ${pricingCard.id===2 
                                                        ? 'btn-accent' 
                                                        : 'btn-primary'
                                                    }`}
                                                >
                                                    Get Started Free
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
</div>
    );
};

export default PricingCard;