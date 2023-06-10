import React from 'react'

const Footer = () => {
    return (
        <footer className='py-6 flex flex-col gap-2 justify-center items-center'>
            <div className='flex items-center gap-4'>
                <a className='hover:text-primary' href="https://www.github.com/ohyajk" target="_blank"><i class="fa-brands fa-github fa-2x"></i></a>
                <a className='hover:text-primary' href="https://www.linkedin.com/in/ohyajk" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a className='hover:text-primary' href="https://www.twitter.com/ohyajk" target="_blank"><i class="fa-brands fa-twitter fa-2x"></i></a>
            </div>
            <p className='text-lg font-bold tracking-wider'>Made with ❤️ by <b className='text-primary font-black'>Jitender Kumar</b></p>
        </footer>
    )
}

export default Footer