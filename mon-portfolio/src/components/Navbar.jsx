import useTransitionNavigate from "./useTransitionNavigate"

export default function Navbar() {
  const go = useTransitionNavigate()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">

      <div className="cyber-navbar max-w-7xl mx-auto flex justify-between">

        <button onClick={() => go("/")} className="cyber-logo">
          ZENTHOR
        </button>

        <div className="flex gap-10">

          <button onClick={() => go("/")} className="cyber-link">
            ACCUEIL
          </button>

          <button onClick={() => go("/manager")} className="cyber-link">
            TALENTS
          </button>

        </div>

      </div>

    </nav>
  )
}