import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {

    const skill = [{ name: 'HTML5', img: '/html5' }, { name: 'CSS3', img: '/css3' }, { name: 'Javascript', img: '/javascript' }, { name: 'React', img: '/react' }, { name: 'TailwindCSS', img: '/tailwindcss' }, { name: 'Redux', img: '/redux' }, { name: 'Node Js', img: '/node-js' }, { name: 'Express Js', img: '/expressjs' }, { name: 'MongoDb', img: '/mongodb' },]

    return (
        <section id='skills' className='relative'>
            < div className='flex flex-col justify-center items-center gap-12 py-12 md:py-16'>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.2, duration: 0.3, } }} viewport={{ amount: 0.2 }}
                    className='text-4xl md:text-6xl'
                >
                    MY Skills
                    <hr className='h-2 w-full bg-secondry animate-pulse' />
                </motion.h2>

                <div className='flex gap-4 justify-center flex-wrap'>
                    {
                        skill.map((s) => {
                            return (
                                <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.2, duration: 0.3, } }} viewport={{ amount: 0.2 }}
                                    className='flex flex-col justify-center items-center gap-2 hover:bg-white/20 p-2 rounded-xl backdrop-blur-lg cursor-pointer'>
                                    <img className='h-12 md:h-16' src={s.img + '.svg'} alt={s.name} />
                                    <h2 className='md:text-xl'>{s.name}</h2>
                                </motion.span>
                            )
                        })
                    }
                </div>

            </div >
        </section>
    )
}

export default Skills