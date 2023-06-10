import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { PopContext } from '../context/PopContext'


const Navbar = () => {
  const { toggleEmailPop } = useContext(PopContext);
  return (
    <>
      <div className='absolute h-[95px]' ></div>
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: '0.2', delay: '4' }} className='sticky z-50 bg-bgbg top-0 left-0 w-full'>
        <nav className='absolute w-full flex justify-center md:justify-between items-center px-16 py-4 bg-bgbg border-b border-primary/50 '>
          <img className='h-8 md:h-10' src="/jk.png" alt="Jk" />
          <ul className='text-xl tracking-wider flex justify-center items-center gap-4'>
            <a href='#home' className='cursor-pointer hover:border-b-4 border-primary hover:scale-105'>HOME</a>
            <a href='#about' className='cursor-pointer hover:border-b-4 border-primary hover:scale-105'>ABOUT</a>
            <a href='#skills' className='cursor-pointer hover:border-b-4 border-primary hover:scale-105'>SKILLS</a>
            <a href='#projects' className='cursor-pointer hover:border-b-4 border-primary hover:scale-105'>PROJECTS</a>

          </ul>
          <ul className='text-xl tracking-wider'>
            <li onClick={toggleEmailPop} className='flex items-center gap-2 border p-2 rounded-lg hover:bg-primary cursor-pointer'><i class="fa-solid fa-envelope"></i><h4>GET IN TOUCH</h4></li>
          </ul>
        </nav>
      </motion.header>
    </>
  )
}

export default Navbar