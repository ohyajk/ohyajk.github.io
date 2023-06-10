import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { PopContext } from '../context/PopContext'
import PortPop from '../components/PortPop'

const Projects = () => {

    const project = [


        { name: 'Coin Tracker', img: '/ct', source: 'https://github.com/ohyajk/cointracker', demo: 'https://cointracker-q7ta.onrender.com/', bio: 'This is a crypto listing app which shows live data of top 100 cryptos around the world.', tech: ['react', 'redux', 'tailwindcss'] },
        { name: 'Coin Tracker', img: '/ct', source: 'https://github.com/ohyajk/cointracker', demo: 'https://cointracker-q7ta.onrender.com/', bio: 'This is a crypto listing app which shows live data of top 100 cryptos around the world.', tech: ['react', 'redux', 'tailwindcss'] },
        { name: 'Coin Tracker', img: '/ct', source: 'https://github.com/ohyajk/cointracker', demo: 'https://cointracker-q7ta.onrender.com/', bio: 'This is a crypto listing app which shows live data of top 100 cryptos around the world.', tech: ['react', 'redux', 'tailwindcss'] },
        { name: 'Coin Tracker', img: '/ct', source: 'https://github.com/ohyajk/cointracker', demo: 'https://cointracker-q7ta.onrender.com/', bio: 'This is a crypto listing app which shows live data of top 100 cryptos around the world.', tech: ['react', 'redux', 'tailwindcss'] },


    ]

    const { portPop, togglePortPop } = useContext(PopContext);

    const [selPort, setSelPort] = useState({})

    return (
        <section id='projects' className='relative'>
            < div className='flex flex-col justify-center items-center gap-12 py-12 md:py-16'>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.2, duration: 0.3, } }} viewport={{ amount: 0.2 }}
                    className='text-4xl md:text-6xl'
                >
                    MY projects
                    <hr className='h-2 w-full bg-secondry animate-pulse' />
                </motion.h2>

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 justify-center flex-wrap'>
                    {
                        project.map((p) => {
                            return (
                                <motion.span onClick={() => { setSelPort(p); togglePortPop() }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.2, duration: 0.3, } }} viewport={{ amount: 0.2 }}
                                    className='flex flex-col justify-center items-center gap-2 bg-anim mx-4 md:mx-0  md:px-4 pt-6 rounded-xl backdrop-blur-lg cursor-pointer hover:brightness-125 hover:grayscale'>
                                    <img className='h-[200px] md:h-[250px] w-[90%] md:w-full' src={'/projects' + p.img + '.jpg'} alt={p.name} />
                                    <h2 className='md:text-xl'>{p.name}</h2>
                                </motion.span>
                            )
                        })
                    }
                </div>
            </div >

            {portPop ? <PortPop data={selPort} /> : ''}

        </section>
    )
}

export default Projects