import Navbar from "../components/Navbar"

export default function Experience() {

 const experiences = [
  {
    role: "Directeur Marketing",
    team: "One Prodige",
    period: "Janvier 2026 — Présent",
    desc: "Définition et pilotage de la stratégie marketing globale de l’organisation : développement de la marque, communication digitale, partenariats et supervision des campagnes promotionnelles."
  },
  {
    role: "Directeur Marketing",
    team: "2R ESPORT",
    period: "Octobre 2025 — Janvier 2026",
    desc: "Gestion de l’image de l’équipe et de sa visibilité : stratégie réseaux sociaux, création de contenus, accompagnement des joueurs et optimisation de la présence médiatique."
  },
  {
    role: "Assistant Marketing",
    team: "2R ESPORT",
    period: "Septembre 2025 — Octobre 2025",
    desc: "ontribution à la gestion de l’image et de la visibilité de l’équipe : participation à la stratégie de communication sur les réseaux sociaux, création et diffusion de contenus, soutien aux joueurs dans leur communication et optimisation de la présence médiatique."
  },
  {
    role: "Executive Assistant",
    team: "FLC CLAN",
    period: "Juin 2025 — Aout 2025",
    desc: "Support direct à la direction : coordination interne, gestion administrative, organisation d’événements et suivi des opérations quotidiennes de la structure."
  },
  {
    role: "Directeur Général",
    team: "FLC CLAN",
    period: "Avril 2025 — Juin 2025",
    desc: "Supervision globale de l’organisation : gestion des équipes, prise de décisions stratégiques, développement de projets et structuration interne du clan."
  },
  {
    role: "Assistant Web TV",
    team: "FLC CLAN",
    period: "Fevrier 2025 — Avril 2025",
    desc: "Participation à la production des contenus vidéo : assistance technique, préparation des émissions, gestion du live et soutien aux équipes de production."
  }
]

  const teams = [
    "/FLC.jpg",
    "/2R.jpg",
    "/1P.jpg"
  ]

  return (
    <div className="text-white min-h-screen relative">

      <Navbar />

      {/* 🌌 Background vidéo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed w-full h-full object-cover -z-10"
      >
        <source src="/zenthor.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/75 -z-10"></div>

      <div className="pt-32 px-8 max-w-5xl mx-auto">

        {/* TITRE */}
        <h1 className="text-5xl font-bold mb-16 text-center cyber-title">
          MON EXPÉRIENCE E-SPORT
        </h1>

        {/* ===== LOGOS DES TEAMS ===== */}
        <div className="flex justify-center gap-12 mb-20 flex-wrap">

          {teams.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Team logo"
              className="w-32 h-32 object-contain cyber-logo-team"
            />
          ))}

        </div>

        {/* ===== LISTE DES EXPÉRIENCES ===== */}
        <div className="space-y-10">

          {experiences.map((exp, i) => (
            <div key={i} className="cyber-card">

              <h2 className="text-2xl font-semibold mb-2">
                {exp.role}
              </h2>

              <p className="text-yellow-400 mb-1">
                {exp.team}
              </p>

              <p className="text-sm text-cyan-300 mb-4">
                {exp.period}
              </p>

              <p className="cyber-text">
                {exp.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}