import { useNavigate } from "react-router-dom"

export default function Intro() {
  const navigate = useNavigate()

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">

      {/* 🎬 VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ⚡ CONTENU */}
      <div className="relative z-10 flex flex-col h-full items-center justify-between py-20">

        {/* 🔝 Logo / Nom */}
        <h1 className="logo-text">
       
        </h1>

        {/* 🔽 Bouton en bas */}
        <button
          onClick={() => navigate("/home")}
          className="neon-btn neon-pulse px-12 py-4 text-xl rounded-xl"
        >
          Découvrir
        </button>

      </div>
    </div>
  )
}