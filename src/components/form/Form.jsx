import React from 'react';
import subsbg from '../../assets/subs-btn.png';
import formbg from '../../assets/form-bg.png';

const Form = () => {
    return (
        <div className='p-4 border-2 border-white bg-[#FFFFFF26] w-4/5 mx-auto rounded-3xl relative -bottom-40 z-10'>

            <div className='flex flex-col justify-center items-center py-20 rounded-2xl bg-white border border-[#1313131A]' style={{ backgroundImage: `url(${formbg})`}}>
                <h3 className='text-3xl font-bold mb-4'>Subscribe to our Newsletter</h3>
                <p className='font-medium text-[#131313B2] mb-6'>Get the latest updates and news right in your inbox!</p>
                <div className='flex gap-4'>
                    <input type="email" name="" id="" placeholder='enter you email' className='input input-bordered rounded-xl' />
                    <button className='btn rounded-xl bg-no-repeat bg-center bg-cover' style={{backgroundImage : `url(${subsbg})`}}>Subscribe</button>
                </div>
            </div>
            
        </div>
    );
};

export default Form;