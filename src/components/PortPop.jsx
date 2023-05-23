import React from 'react'
import { PopContext } from '../context/PopContext'
import { useContext } from 'react';

const PortPop = ({ data }) => {

    const { togglePortPop } = useContext(PopContext);


    return (
        <section className='fixed  top-0 left-0 h-full bg-anim2 w-full z-50 flex flex-col justify-center items-center'>
            <div className='relative bg-bgbg p-8 flex flex-col justify-center items-center gap-4 w-[90%] sm:w-3/4 md:w-[42%] max-w-[1440px]'>
                <h2 className='text-4xl md:text-6xl'>
                    {data.name}
                    <hr className='h-2 w-full bg-secondry animate-pulse' />
                </h2>
                <img src={'/projects' + data.img + '.jpg'} alt={data.name} />
                <p className='text-lg'>{data.bio}</p>
                <ul className='flex gap-2 justify-center items-center flex-wrap'>
                    {data.tech.map((t) => <li className='border-primary border-2 px-4 py-2 rounded-lg'>{t}</li>)}
                </ul>
                <a href={data.source} target='_blank' className='text-center flex gap-2 justify-center items-center px-4 py-2 w-full  bg-primary hover:scale-105'><i class="fa-brands fa-github fa-lg"></i> <span className='text-center text-lg'>Github Source</span></a>
                <a href={data.demo} target='_blank' className='text-center flex gap-2 justify-center items-center px-4 py-2 w-full  bg-primary hover:scale-105'><i class="fa-solid fa-globe fa-lg"></i> <span className='text-center text-lg'>Live Demo</span></a>
                <img onClick={togglePortPop} className='absolute right-2 top-2 h-10 cursor-pointer hover:scale-125' src="/cross.png" alt="cross" />
            </div>
        </section>
    )
}

export default PortPop