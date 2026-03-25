import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Intro from "./pages/Intro"
import Home from "./pages/Home"
import Manager from "./pages/Manager"
import Gallery from "./pages/Gallery"
import Experience from "./pages/Experience"

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()

  
  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation")
    const navType = navEntries.length > 0 ? navEntries[0].type : null

    if (navType === "reload" && location.pathname !== "/intro") {
      navigate("/intro", { replace: true })
    }
  }, [])

  return (
    <>
      {/*  VIDEO TRANSITION GLOBALE */}
      <video
        id="page-transition"
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[9999] hidden"
      >
        <source src="/transition.mp4" type="video/mp4" />
      </video>

      {/* ROUTES */}
      <Routes>

        {/* INTRO */}
        <Route path="/intro" element={<Intro />} />

        {/* SITE */}
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/experience" element={<Experience />} />

      </Routes>
    </>
  )
}