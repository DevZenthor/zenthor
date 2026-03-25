import { useNavigate } from "react-router-dom"

export default function Intro() {
  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen overflow-hidden relative">

      <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative h-full flex items-end justify-center pb-24">
        <button onClick={() => navigate("/")} className="neon-btn neon-pulse">
          Découvrir
        </button>
      </div>

    </div>
  )
}