import React from 'react'
import { motion } from 'framer-motion'

const Project = (props) => {
    return (
        <motion.div initial={{ x: '-2000px' }} animate={{ x: '0px' }} transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }} className='flex flex-col  bckdrp p-4'>
            <h2 className='py-2 text-xl'>{props.name}</h2>
            <img className='h-full w-full' src={`/projects/${props.img}`} alt={props.name} />
            <div className='mt-4'>
                <a className='px-4 py-2 bckdrp hover:bg-black/50' href={props.live} target='_blank'>Live Demo</a>
                <a className='px-4 py-2 bckdrp ml-2 hover:bg-black/50' href={props.repo} target='_blank'>GitHub Repo</a>
            </div>
        </motion.div>
    )
}

export default Project