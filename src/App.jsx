import { useEffect, useState } from "react"
import About from "./pages/About"
import Home from "./pages/Home"
import BarLoader from "react-spinners/BarLoader";
import { AnimatePresence, motion } from "framer-motion";
import Skills from "./pages/Skills";
import Tools from "./pages/Tools";
import Projects from "./pages/Projects";
import Popup from "./components/Popup";
import { PopContext } from "./context/PopContext";
import { useContext } from 'react';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  const { emailPop } = useContext(PopContext);


  return (
    <main>

      <AnimatePresence>
        {loading &&
          <motion.section initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, }} transition={{ duration: '0.2' }} className="overflow-hidden z-50 flex flex-col gap-2 justify-center items-center h-screen w-full animate-pulse">
            <BarLoader
              color={"#ff3333"}
              loading={loading}
              size={300}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <h6 className="text-xl">Welcome Stranger</h6>
          </motion.section>
        }
      </AnimatePresence>

      {!loading &&
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: '0.2', delay: '0.2' }}>
            <Home />
            <About />
            <Skills />
            <Tools />
            <Projects />
            {emailPop ? <Popup /> : ''}
          </motion.div>
        </AnimatePresence>
      }

    </main >
  )
}

export default App