import React from 'react';
import banner from '../../assets/banner-main.png';
import shadow from '../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className='bg-black w-4/5 mx-auto rounded-xl bg-no-repeat bg-center bg-cover mb-20' style={{ backgroundImage: `url(${shadow})` }}>

            <div className='flex flex-col items-center p-15 text-center'>
                <img className='mb-6' src={banner} alt="Banner" />
                <h3 className='text-4xl font-bold leading-[150%] text-white mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='text-2xl font-medium text-[#FFFFFFB2] mb-6'>Beyond Boundaries Beyond Limits</p>

                <button className='bg-[#FFFFFF0D] p-2 border border-[#E7FE29] rounded-2xl cursor-pointer'>
                    <div className='text-black bg-[#E7FE29] rounded-xl px-5 font-bold py-3'>Claim Free Credit</div>
                </button>

            </div>
        </div>
    );
};

export default Banner;