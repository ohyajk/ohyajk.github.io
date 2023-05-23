import React from 'react'
import StarAnim from '../components/StarAnim'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Home = () => {

  const [text] = useTypewriter({
    words: ['React Js Developer', 'Node Js Developer', 'Website Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })


  return (
    <div className='relative w-full h-screen flex flex-col justify-center items-center z-10 border-b border-secondry' >
      <motion.h2 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { type: "tween", bounce: 0.2, duration: 0.2, delay: 1 } }} viewport={{ amount: 1 }} className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl uppercase text-center'>Hello I am</motion.h2>
      <motion.h1 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { type: "tween", bounce: 0.2, duration: 0.2, delay: 1.3 } }} viewport={{ amount: 1 }} className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl uppercase text-center text-primary'>Jitender kumar</motion.h1>

      <motion.h4 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { type: "tween", bounce: 0.2, duration: 0.2, delay: 1.7 } }} viewport={{ amount: 1 }} className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl uppercase flex justify-center'><span className=' ml-4 w-[300px] xs:w-[350px] sm:w-[460px] md:w-[580px]'>I am a {text}<Cursor /></span></motion.h4>
      <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { type: "tween", bounce: 0.2, duration: 0.2, delay: 2 } }} viewport={{ amount: 1 }} className='mt-4 text-primary hover:bg-primary hover:text-white animate-pulse hover:animate-none hover:scale-110 text-xl border-2 border-primary px-4 py-2 text-center rounded-lg bg-bgbg'>Let's Get In  Touch</motion.button>

      <StarAnim />
    </div>
  )
}

export default Home