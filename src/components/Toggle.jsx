import React, { useState } from 'react';
import ProductTab from './ProductTab';
import CartTab from './CartTab';

const Toggle = ({dataPromise}) => {

    

    const [activeTab,setactiveTab]=useState('products');

    const handleActiveTab=(tabname)=>{
        setactiveTab(tabname)
    }

    return (
        <div className='w-[80%] mx-auto mt-20'>
            <div>
                <h3 className='font-semibold text-3xl text-center'>Premium Digital Tools</h3>
                <p className='text-center mt-5 leading-relaxed'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='mt-10 flex justify-center'>
                
                    <div className="tabs tabs-box bg-transparent shadow-none border-none">

                        <input onClick={()=>handleActiveTab('products')} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full  ${activeTab === 'products' ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white' 
                        : 'bg-gray-200'}`} aria-label="Products" />

                        <input onClick={()=>handleActiveTab('cart')} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full  ${activeTab === 'cart' ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white' : 'bg-gray-200' }`} aria-label="Cart" defaultChecked />
                       
                    </div>
            </div>

            <div>
                {activeTab==='products' && <ProductTab dataPromise={dataPromise}></ProductTab>}
                {activeTab==='cart' && <CartTab></CartTab>}
            </div>
        </div>
    );
};

export default Toggle;