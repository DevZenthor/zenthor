import { useRef, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { FaTwitter, FaDiscord } from "react-icons/fa"

export default function Intro() {
  const aboutRef = useRef(null)
  const [showNavbar, setShowNavbar] = useState(false)

  /* 🔥 FIX REFRESH + BLOQUE SCROLL */
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    window.scrollTo(0, 0)
    document.body.style.overflow = "hidden"

    return () => (document.body.style.overflow = "auto")
  }, [])

  const scrollToAbout = () => {
    document.body.style.overflow = "auto"
    setShowNavbar(true)

    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="text-white">

      {/* Navbar seulement après entrée */}
      {showNavbar && <Navbar />}

      {/* ================= INTRO VIDEO ================= */}
      <section className="relative h-screen w-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-end justify-center pb-24">
          <button
            onClick={scrollToAbout}
            className="neon-btn neon-pulse px-12 py-4 text-xl rounded-xl"
          >
            Découvrir
          </button>
        </div>
      </section>

      {/* ================= SECTION PROFIL ================= */}
      <section
        ref={aboutRef}
        className="relative min-h-screen flex items-center justify-center px-6"
      >

        {/* VIDEO BACKGROUND SITE */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/zenthor.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        {/* CARD */}
        <div className="relative z-10 cyber-card max-w-3xl w-full text-center">

          <img
            src="/pp.jpg"
            alt="Zenthor"
            className="w-40 h-40 mx-auto cyber-avatar"
          />

          <h1 className="cyber-title mt-8">ZENTHOR</h1>

          <p className="cyber-text mt-6">
            Directeur Marketing de <span className="text-yellow-400 font-semibold">One Prodige</span>,
            manager de plusieurs talents et webdesigner spécialisé dans la création
            d’expériences digitales modernes et impactantes.
          </p>

          {/* RÉSEAUX */}
          <div className="flex justify-center gap-8 mt-10">

            <a
              href="https://x.com/zenthor1480"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-social"
            >
              <FaTwitter size={28} />
            </a>

            <a
              href="https://discord.gg/XZjbmMnCRR"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-social"
            >
              <FaDiscord size={28} />
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}