import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">

      <div className="bg-black/50 backdrop-blur-lg border border-cyan-400 rounded-xl px-6 py-3 max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <button
          onClick={() => navigate("/")}
          className="text-yellow-400 font-bold tracking-widest"
        >
          ZENTHOR
        </button>

        {/* MENU */}
        <div className="flex gap-8 text-cyan-200">

          <button onClick={() => navigate("/")}>
            ACCUEIL
          </button>

          <button onClick={() => navigate("/manager")}>
            TALENTS
          </button>

          <button onClick={() => navigate("/gallery")}>
            GALERIE
          </button>

        </div>

        {/* CONTACT */}
        <button
          onClick={() =>
            window.open("https://discord.gg/XZjbmMnCRR", "_blank")
          }
          className="border border-cyan-400 px-4 py-2 rounded-lg"
        >
          CONTACT
        </button>

      </div>

    </nav>
  )
}