import React from 'react'
import { motion } from 'framer-motion'

const Tools = () => {

    const tool = [{ name: 'Affinity', img: '/affinity' }, { name: 'Photoshop', img: '/photoshop' }, { name: 'Vs Code', img: '/vs-code' }, { name: 'Insomnia', img: '/insomnia' }, { name: 'Vite', img: '/vitejs' }, { name: 'Git', img: '/git' },]

    return (
        <section className='relative'>
            < div className='flex flex-col justify-center items-center gap-12 py-12 md:py-16'>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.2, duration: 0.3, } }} viewport={{ amount: 0.2 }}
                    className='text-4xl md:text-6xl'
                >
                    MY Tools
                    <hr className='h-2 w-full bg-secondry animate-pulse' />
                </motion.h2>

                <div className='flex gap-4 justify-center flex-wrap'>
                    {
                        tool.map((t) => {
                            return (
                                <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.2, duration: 0.3, } }} viewport={{ amount: 0.2 }}
                                    className='flex flex-col justify-center items-center gap-2 hover:bg-white/20 p-2 rounded-xl backdrop-blur-lg cursor-pointer'>
                                    <img className='h-12 md:h-16' src={t.img + '.svg'} alt={t.name} />
                                    <h2 className='md:text-xl'>{t.name}</h2>
                                </motion.span>
                            )
                        })
                    }
                </div>

            </div >
        </section>
    )
}

export default Tools