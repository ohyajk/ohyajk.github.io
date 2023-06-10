import { motion } from 'framer-motion'
import React from 'react'

const About = () => {



    return (
        <section id='about' className='relative'>

            < div className='relative flex flex-col justify-center items-center gap-12 py-12 md:py-16'>
                <motion.h2 initial={{ opacitscale: 1, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "tween", bounce: 0.2, duration: 0.3, } }} viewport={{ amount: 0.2 }} className='text-4xl md:text-6xl'>
                    About Me
                    <hr className='h-2 w-full bg-secondry animate-pulse' />
                </motion.h2>

                <motion.p initial={{ opacitscale: 1, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "tween", bounce: 0.2, duration: 0.3, } }} viewport={{ amount: 0.2 }} className='text-center md:text-xl  w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]'>
                    <span className='text-3xl text-primary'>I</span> am a dedicated and skilled web developer specializing in creating web applications that seamlessly combine functional capabilities with visually appealing design. I am passionate about crafting websites that not only provide excellent functionality but also deliver an engaging and aesthetically pleasing user experience.

                    With my expertise in web development technologies, I have the ability to build robust and scalable applications that meet the unique needs of clients. I believe in finding the perfect balance between functionality and design, ensuring that the websites I create not only perform flawlessly but also captivate users with their visually appealing interfaces.
                </motion.p>


            </div >
        </section>
    )
}

export default About