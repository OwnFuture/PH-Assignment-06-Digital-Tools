import React from 'react';
import { use } from "react";
import ProductTabCard from './ProductTabCard';

const ProductTab = ({dataPromise}) => {

    const cards =use(dataPromise);
    console.log(cards);
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                cards.map(card=><ProductTabCard key={card.id} card={card}></ProductTabCard>)
            }
        </div>
    );
};

export default ProductTab;