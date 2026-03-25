import useTransitionNavigate from "./useTransitionNavigate"

export default function Navbar() {
  const go = useTransitionNavigate()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">

      <div className="cyber-navbar max-w-7xl mx-auto flex items-center justify-between">

        {/* 🔶 LOGO */}
        <button onClick={() => go("/")} className="cyber-logo">
          ZENTHOR
        </button>

        {/* 🔹 MENU */}
        <div className="hidden md:flex gap-10 text-sm tracking-widest">

          <button
            onClick={() => go("/")}
            className="cyber-link"
          >
            ACCUEIL
          </button>

          <button
            onClick={() => go("/manager")}
            className="cyber-link"
          >
            TALENTS
          </button>

          <button
            onClick={() => go("/gallery")}
            className="cyber-link"
          >
            GALERIE
          </button>

          <button
            onClick={() => go("/experience")}
            className="cyber-link"
          >
            EXPÉRIENCE
          </button>

        </div>

        {/* ⚡ CONTACT */}
        <button
          onClick={() =>
            window.open("https://discord.gg/TON_SERVEUR", "_blank")
          }
          className="cyber-btn"
        >
          CONTACT
        </button>

      </div>

    </nav>
  )
}