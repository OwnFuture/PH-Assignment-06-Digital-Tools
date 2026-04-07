import React from 'react';

const BannerEx = () => {
    return (
       <div className='flex flex-col sm:flex-row justify-around items-center bg-linear-to-r from-blue-500 to-purple-600 p-6 sm:p-10  text-center gap-6'>

            <div>
                <h3 className='font-semibold text-2xl sm:text-3xl text-white mb-2'>50K+</h3>
                <p className='text-white text-sm sm:text-base'>Active Users</p>
            </div>

            <div>
                <h3 className='font-semibold text-2xl sm:text-3xl text-white mb-2'>200+</h3>
                <p className='text-white text-sm sm:text-base'>Premium Tools</p>
            </div>

            <div>
                <h3 className='font-semibold text-2xl sm:text-3xl text-white mb-2'>4.9</h3>
                <p className='text-white text-sm sm:text-base'>Rating</p>
            </div>

        </div>
    );
};

export default BannerEx;