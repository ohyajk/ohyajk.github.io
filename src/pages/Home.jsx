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
    <div className='relative w-full h-screen flex flex-col justify-center items-center z-10' >
      <motion.h2 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 1.5 }} className='md:text-7xl uppercase text-center'>Hello I am</motion.h2>
      <motion.h1 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 1.8 }} className='md:text-8xl uppercase text-center text-primary'>Jitender kumar</motion.h1>

      <motion.h4 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 2 }} className='text-6xl uppercase flex justify-center'><span className='ml-4  w-[580px]'>I am a {text}<Cursor /></span></motion.h4>

      <StarAnim />
    </div>
  )
}

export default Home