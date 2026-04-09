import React from 'react';

const Explore = () => {
    return (
        <div className='bg-linear-to-r from-blue-500 to-purple-600 text-white'>
            <div className='p-15'>
                <div>
                    <h3 className='font-semibold text-3xl text-center'>Ready To Transform Your Wokflow</h3>
                    <p className='text-sm text-center mt-3'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                </div>

                <div className='mt-10 flex justify-center gap-2'>
                    <button className='btn p-3 rounded-full text-sm'>Explore Products</button>
                    <button className='btn p-3 rounded-full text-sm '>View Pricing</button>
                </div>
                <p className='text-center text-sm mt-10'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Explore;