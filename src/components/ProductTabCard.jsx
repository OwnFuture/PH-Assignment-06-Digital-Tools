import React from 'react';

const ProductTabCard = ({card}) => {
    return (
        <div className='w-[80%] mx-auto mt-20'>
            <div className="card w-70 lg:w-96 bg-base-100 shadow-sm">
                <div className="card-body">

                    <div className='flex justify-between items-center mb-3'>
                        <img className='rounded-full' height={40} width={50} src={card.icon} alt={card.name} />
                        <span className="badge badge-xs badge-warning">{card.tag}</span>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold">{card.name}</h2>
                        <p>{card.description}</p>
                        <span className="text-xl">${card.price}/{card.period}</span>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">

                       {
                        card.features.map(feature=> <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{feature}</span>
                        </li>)
                       }
                
                    </ul>
                    
                    <div className="mt-6">
                            <button className="btn btn-primary btn-block">Buy Now</button>
                    </div>
                </div>

                </div>
        </div>
    );
};

export default ProductTabCard;