import { useEffect, useState } from "react"
import About from "./pages/About"
import Home from "./pages/Home"
import BarLoader from "react-spinners/BarLoader";
import { AnimatePresence, motion } from "framer-motion";


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <main>

      <AnimatePresence>
        {loading &&
          <motion.section initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 1000 }} transition={{ duration: '1' }} className="overflow-hidden z-50 flex flex-col gap-2 justify-center items-center h-screen w-full animate-pulse">
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
          <motion.div initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 1000 }} transition={{ duration: '1', delay: '0.4' }}>
            <Home />
            <About />
          </motion.div>
        </AnimatePresence>
      }

    </main >
  )
}

export default App
