import React from 'react'
import { PopContext } from '../context/PopContext'
import { useContext } from 'react';

const Popup = () => {

    const { toggleEmailPop } = useContext(PopContext);

    return (
        <section className='fixed  top-0 left-0 h-full bg-anim2 w-full z-50 flex flex-col justify-center items-center'>
            <form className='relative bg-bgbg p-8 flex flex-col justify-center items-center gap-4 w-[90%] sm:w-3/4 md:w-[42%] xl:w-1/4'>
                <h2 className='text-4xl md:text-6xl'>
                    Contact Me
                    <hr className='h-2 w-full bg-secondry animate-pulse' />
                </h2>
                <input autoComplete='none' className='px-4 py-2 outline-none w-full' type="text" placeholder='Your Name' required />
                <input autoComplete='none' className='px-4 py-2 outline-none w-full' type="email" placeholder='Your Email' required />
                <textarea autoComplete='none' className='px-4 py-2 outline-none w-full' placeholder='Add Message' rows="4" required></textarea>
                <button className='px-4 py-2 w-full bg-primary hover:scale-105' type="submit">Submit</button>
                <img onClick={toggleEmailPop} className='absolute right-2 top-2 h-10 cursor-pointer hover:scale-125' src="/cross.png" alt="cross" />
            </form>
        </section>
    )
}

export default Popup