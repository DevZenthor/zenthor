import { useState } from "react"
import useTransitionNavigate from "./useTransitionNavigate"

export default function Navbar() {
  const go = useTransitionNavigate()
  const [open, setOpen] = useState(false)

  const nav = (p) => {
    setOpen(false)
    go(p)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 py-3 md:py-4">
        <div className="cyber-navbar max-w-7xl mx-auto flex justify-between items-center">

          <button onClick={() => nav("/accueil")} className="cyber-logo">
            ZENTHOR
          </button>

          {/* Desktop */}
          <div className="hidden md:flex gap-10">
            <button onClick={() => nav("/accueil")} className="cyber-link">ACCUEIL</button>
            <button onClick={() => nav("/manager")} className="cyber-link">TALENTS</button>
            <button onClick={() => nav("/gallery")} className="cyber-link">GALERIE</button>
            <button onClick={() => nav("/experience")} className="cyber-link">EXPÉRIENCE</button>
          </div>

          <button
            onClick={() => window.open("https://discord.gg/XZjbmMnCRR")}
            className="cyber-btn hidden md:block"
          >
            CONTACT
          </button>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1">
            <span className="w-7 h-[2px] bg-cyan-300"></span>
            <span className="w-7 h-[2px] bg-cyan-300"></span>
            <span className="w-7 h-[2px] bg-cyan-300"></span>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex flex-col items-center justify-center gap-10 text-xl">
          <button onClick={() => nav("/accueil")}>ACCUEIL</button>
          <button onClick={() => nav("/manager")}>TALENTS</button>
          <button onClick={() => nav("/gallery")}>GALERIE</button>
          <button onClick={() => nav("/experience")}>EXPÉRIENCE</button>
          <button
            onClick={() => window.open("https://discord.gg/XZjbmMnCRR")}
            className="cyber-btn"
          >
            CONTACT
          </button>
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-3xl">✕</button>
        </div>
      )}
    </>
  )
}