import React from 'react'
import banner from '../../public/images/banner-3.png'

const Banner = () => {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto my-10 md:px-20 px-4 flex flex-col md:flex-row'>
            <div className='w-ful md:w-1/2 md:m-32 m-12 order-2 md:order-1'>
                <div className='space-y-12'>
                    <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                    <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!</p>
                    <label className="input validator outline-none border-none">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor" >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input className='dark:text-slate-900 outline-none border-none' type="email" placeholder="mail@site.com" required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
                </div>
                <button className="btn btn-secondary">Send Massage</button>
            </div>
            <div className='w-ful md:w-1/2 order-1'>
                <img src={banner} alt="" className='w-full' />
            </div>
        </div>
    </>
  )
}

export default Banner
