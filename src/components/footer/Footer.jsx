import React from 'react';
import Logo from '../../assets/logo-footer.png';
import subsbg from '../../assets/subs-btn.png';



const Footer = () => {
    return (
        <div className='bg-[#06091A] pt-60 absolute'>

            <div className='w-4/5 mx-auto pb-20'>
                <div className='flex justify-center items-center'>
                    <img src={Logo} className='mb-16' alt="" />
                </div>
                <div className='text-white grid grid-cols-3 gap-15'>
                    <div className='space-y-2'>
                        <h3 className='mb-2'>About Us</h3>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='space-y-2'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h3>Subscribe</h3>
                        <p className='text-[#FFFFFF99]'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='flex'>
                            <input type="email" name="" id="" placeholder='' className='input input-bordered rounded-r-none rounded-xl' />
                            <button className='btn rounded-l-none rounded-xl bg-no-repeat bg-center' style={{ backgroundImage: `url(${subsbg})` }}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-[#FFFFFF26] text-center py-8'>
                <h1 className='text-[#FFFFFF99]'>@2024 Your Company All Rights Reserved.</h1>

            </div>

        </div>
    );
};

export default Footer;