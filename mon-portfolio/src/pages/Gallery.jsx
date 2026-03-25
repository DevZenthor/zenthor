import Navbar from "../components/Navbar"

export default function Gallery() {

  const projects = [
    {
      title: "Coach Cripsy",
      role: "Portfolio Coach",
      img: "/cripsy.jpg",
      desc: "Site professionnel pour coach e-sport avec présentation et contact.",
      link: "https://coachcripsy.vercel.app/"
    },
    {
      title: "Ryze",
      role: "Portfolio Monteur",
      img: "/ryze.jpg",
      desc: "Portfolio moderne pour monteur vidéo avec mise en avant des projets.",
      link: "https://ryze-portfolio-six.vercel.app/"
    },
    {
      title: "Nitsy",
      role: "Portfolio Graphiste",
      img: "/nitsy.jpg",
      desc: "Site vitrine pour graphiste avec galerie de créations.",
      link: "https://nitsy-beta.vercel.app/"
    }
  ]

  return (
    <div className="text-white min-h-screen relative">

      <Navbar />

      {/* Background vidéo */}
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

      {/* CONTENU */}
      <div className="pt-32 px-8 max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-16 text-center cyber-title">
          MES RÉALISATIONS
        </h1>

        {/* ===== GRILLE ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((p, i) => (
            <div key={i} className="cyber-card overflow-hidden">

              {/* IMAGE SITE */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              {/* NOM */}
              <h2 className="text-xl font-semibold">
                {p.title}
              </h2>

              {/* ROLE */}
              <p className="text-yellow-400 text-sm mb-2">
                {p.role}
              </p>

              {/* DESCRIPTION */}
              <p className="cyber-text mb-6">
                {p.desc}
              </p>

              {/* BOUTON VOIR SITE */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn inline-block"
              >
                Voir le site
              </a>

            </div>
          ))}

        </div>

        {/* ===== CARD COMMANDE ===== */}
        <div className="mt-24 flex justify-center">

          <div className="cyber-card max-w-xl text-center">

            <h2 className="text-3xl font-bold mb-6 cyber-title">
              Vous voulez le même ?
            </h2>

            <p className="cyber-text mb-8">
              Commandez votre site personnalisé et démarquez-vous avec
              un design unique et professionnel.
            </p>

            <a
              href="https://discord.gg/XZjbmMnCRR"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn neon-pulse inline-block"
            >
              Commander sur Discord
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}