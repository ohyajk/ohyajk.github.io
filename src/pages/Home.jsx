import { motion } from 'framer-motion'
import React from 'react'
import Project from '../components/Project'

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }} className='px-[4vw] md:px-[18vw] w-[100%]'>
      {/* My img & Intro */}
      <div className='flex flex-col xl:flex-row justify-center items-center xl:items-start gap-2 '>
        <motion.img initial={{ x: '-2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }} className='h-64 rounded-lg bckdrp p-4' src="/dp.jpg" alt="photo" />
        <div className='flex flex-col gap-2'>
          <motion.h1 initial={{ x: '2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }} className='text-5xl font-bold bckdrp p-4'>Hello, I am Jitender Kumar</motion.h1>
          <motion.p initial={{ x: '2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }} className='bckdrp p-4'>
            I am a full-stack web developer and technology enthusiast driven by a passion for creating innovative and engaging web experiences. With a quick learning ability and a strong work ethic, I bring ideas to life through code. I am dedicated to using the latest technologies and constantly seeking new challenges to further my skills and bring my clients visions to reality. My passion for technology drives me to build websites that are not only aesthetically pleasing but also provide a seamless user experience. Lets work together to bring your technology-forward ideas to life.
          </motion.p>
        </div>
      </div>
      {/* Tech Stack */}
      <motion.div initial={{ x: '-2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }} className='flex justify-center items-center gap-4 mt-2 bckdrp p-4 flex-wrap'>
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.6, ease: 'easeOut' }} className='h-14' src="/html5.svg" alt="html" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }} className='h-14' src="/css3.svg" alt="" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6, ease: 'easeOut' }} className='h-14' src="/javascript.svg" alt="" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.6, ease: 'easeOut' }} className='h-14' src="/react.svg" alt="" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }} className='h-14' src="/ruby.svg" alt="" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }} className='h-14' src="rubyonrails.svg" alt="" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }} className='h-14' src="node-js.svg" alt="" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }} className='h-14' src="photoshop.svg" alt="" />
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }} className='h-14' src="vs-code.svg" alt="" />
      </motion.div>
      {/* About Section */}
      <motion.div initial={{ x: '2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }} className='bckdrp p-4 mt-2' >



        <span className='text-4xl font-bold'>I</span> am well-versed in a variety of technologies, including HTML, CSS, Tailwind, JavaScript, React, Redux, Vite, Photoshop, Ruby, Ruby on Rails, and Node.js. I have a strong understanding of front-end development, as well as the ability to build back-end systems using Ruby on Rails. My expertise in these technologies allows me to develop and create dynamic, user-friendly websites and applications. I am confident in my ability to tackle complex projects and find innovative solutions to meet the needs of my clients. I am eager to continue growing and expanding my skillset, and I am always on the lookout for new and exciting opportunities to challenge myself and further my career.

      </motion.div>
      {/* Education & Experience */}
      <div className='grid md:grid-cols-2 gap-2 mt-2  '>
        <motion.div initial={{ x: '2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }} className='bckdrp p-4'>
          <h2 className='text-2xl font-semibold'>Education</h2>
          <div className='py-4'>
            <h4 className='text-xl'>Microverse</h4>
            <h6 className='text-lg'>Associate Degree in Software Development</h6>
            <h6>2022-Present</h6>
          </div>
          <div>
            <h4 className='text-xl'>Chandigarh University</h4>
            <h6 className='text-lg'>Bsc. Animation, Vfx & Gaming</h6>
            <h6>2017-2020</h6>
          </div>
        </motion.div>
        <motion.div initial={{ x: '-2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }} className='bckdrp p-4'>
          <h2 className='text-2xl font-semibold'>Experience</h2>
          <div className='py-4'>
            <h4 className='text-xl'>Student Mentor</h4>
            <h6 className='text-lg'>Microverse</h6>
            <h6>2023-Present</h6>
          </div>
        </motion.div>
      </div>
      {/* Projects */}
      <div className='grid md:grid-cols-2 gap-2 mt-2 h-full '>
        <Project name='CoinTracker' img='ct.jpg' live='https://cointracker-q7ta.onrender.com/' repo='https://github.com/ohyajk/cointracker' />
        <Project name='EventCalendar' img='calendar.jpg' live='https://event-calendar-app.onrender.com/' repo='https://github.com/ohyajk/Event-Calender-App' />

      </div>
      {/* Contact Me */}
      <motion.div initial={{ x: '2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }} className='bckdrp p-4 mt-2 text-center'>
        <h2 className='text-2xl font-semibold'>Contact Me</h2>
        <div className='flex justify-center items-center gap-2 flex-wrap'>
        <a className='px-4 py-2 bckdrp hover:bg-black/50 flex justify-start items-center gap-2 mt-2' href='' target='_blank'><i class="fa-solid fa-envelope fa-2x"></i><span>Ohyajk@Gmail.com</span></a>
        <a className='px-4 py-2 bckdrp hover:bg-black/50 flex justify-start items-center gap-2 mt-2' href='' target='_blank'><i class="fa-brands fa-linkedin fa-2x"></i><span>@Ohyajk</span></a>
        <a className='px-4 py-2 bckdrp hover:bg-black/50 flex justify-start items-center gap-2 mt-2' href='https://github.com/ohyajk' target='_blank'><i class="fa-brands fa-github fa-2x"></i><span>@Ohyajk</span></a>
        <a className='px-4 py-2 bckdrp hover:bg-black/50 flex justify-start items-center gap-2 mt-2' href='https://www.hackerrank.com/ohyajk' target='_blank'><i class="fa-brands fa-hackerrank fa-2x"></i><span>@Ohyajk</span></a>
        </div>
      </motion.div>

    </motion.div>
  )
}

export default Home