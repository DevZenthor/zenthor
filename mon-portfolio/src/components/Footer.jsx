import { FaTwitter, FaDiscord } from "react-icons/fa"
import useTransitionNavigate from "./useTransitionNavigate"

export default function Footer() {
  const go = useTransitionNavigate()

  return (
    <footer className="relative mt-24">

      {/* Background glass */}
      <div className="cyber-footer max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Logo + desc */}
          <div>
            <h2 className="cyber-logo text-2xl mb-4">
              ZENTHOR
            </h2>

            <p className="cyber-text">
              Manager de talents e-sport et webdesigner spécialisé
              dans la création d’expériences digitales modernes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Navigation
            </h3>

            <ul className="space-y-2">

              <li>
                <button onClick={() => go("/accueil")} className="cyber-link">
                  Accueil
                </button>
              </li>

              <li>
                <button onClick={() => go("/manager")} className="cyber-link">
                  Talents
                </button>
              </li>

              <li>
                <button onClick={() => go("/gallery")} className="cyber-link">
                  Galerie
                </button>
              </li>

              <li>
                <button onClick={() => go("/experience")} className="cyber-link">
                  Expérience
                </button>
              </li>

            </ul>
          </div>

          {/*  Réseaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Réseaux
            </h3>

            <div className="flex justify-center md:justify-start gap-6">

              <a
                href="https://x.com/zenthor1480"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-social"
              >
                <FaTwitter size={24} />
              </a>

              <a
                href="https://discord.gg/XZjbmMnCRR"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-social"
              >
                <FaDiscord size={24} />
              </a>

            </div>
          </div>

        </div>

        {/*  Bas footer */}
        <div className="border-t border-cyan-400/30 mt-12 pt-6 text-center text-sm text-cyan-200">
          © {new Date().getFullYear()} Zenthor — Tous droits réservés
        </div>

      </div>

    </footer>
  )
}