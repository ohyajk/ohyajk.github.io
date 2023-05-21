import { motion } from 'framer-motion'
import React from 'react'

const About = () => {

    const variant = {
        offscreen: {
            x: -2000
        },
        onscreen: {
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
        >

            < motion.div variants={variant} className='h-screen bg-bgbg border-t border-secondry' > About</motion.div >
        </motion.div >
    )
}

export default About