import React, { use } from 'react';

const GetStartedCard = ({startedDataPromise}) => {

    const startedCards=use(startedDataPromise);
    return (
     <div className='bg-[#f9fafc92] my-12 sm:my-16 lg:my-20'>

    <div className='w-[90%] sm:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>

        {
            startedCards.map(startedCard => (
                <div 
                    key={startedCard.id} 
                    className='bg-base-300 shadow-sm p-6 sm:p-8 lg:p-10 rounded-3xl relative 
                    transition-all duration-300 hover:-translate-y-3 hover:shadow-xl'
                >

                    
                    <span className='absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 
                    flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-600 
                    text-white rounded-full text-xs sm:text-sm'>
                        {startedCard.id}
                    </span>

                    
                    <div className='flex justify-center'>
                        <img 
                            className='w-20 sm:w-24 lg:w-auto' 
                            src={startedCard.image} 
                            alt="" 
                        />
                    </div>

                    
                    <div>
                        <h3 className='text-center font-semibold text-lg sm:text-xl lg:text-2xl my-3'>
                            {startedCard.title}
                        </h3>

                        <p className='text-center text-xs sm:text-sm lg:text-base'>
                            {startedCard.description}
                        </p>
                    </div>

                </div>
            ))
        }

    </div>

</div>
    );
};

export default GetStartedCard;