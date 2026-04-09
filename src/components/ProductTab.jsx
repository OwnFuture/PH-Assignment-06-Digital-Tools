import React from 'react';
import { use } from "react";
import ProductTabCard from './ProductTabCard';

const ProductTab = ({dataPromise,carts,setcarts}) => {

    const cards =use(dataPromise);
    
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                cards.map(card=><ProductTabCard key={card.id} card={card} carts={carts} setcarts={setcarts}></ProductTabCard>)
            }
        </div>
    );
};

export default ProductTab;