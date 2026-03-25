import Navbar from "../components/Navbar"
import PageTransition from "../components/PageTransition"
import { FaTwitter } from "react-icons/fa"

export default function Manager() {

  const clients = [
    {
      name: "Hydarnix",
      img: "/hydranix.jpg",
      twitter: "https://x.com/HYDRANIX_T",
      team: "One Prodige"
    },
    {
      name: "Dreyqan",
      img: "/dreyqan.jpg",
      twitter: "https://x.com/dreyqan",
      team: "F/A"
    },
    {
      name: "Coach Nattalle",
      img: "/nattalle.jpg",
      twitter: "https://x.com/CoachNattalle",
      team: "One Prodige"
    },
    {
      name: "Coach Yushin",
      img: "/yushin.jpg",
      twitter: "https://x.com/coachyushin",
      team: "F/A"
    },
    {
      name: "Lix",
      img: "/lix.jpg",
      twitter: "https://x.com/1plixx",
      team: "F/A"
    },
    {
      name: "Ichixx",
      img: "/ichixx.jpg",
      twitter: "https://x.com/ichiixfn",
      team: "F/A"
    },
    {
      name: "Eyozz",
      img: "/eyozz.jpg",
      twitter: "https://x.com/EyozzFn",
      team: "F/A"
    }
  ]

  return (
    <PageTransition>

      <div className="text-white min-h-screen relative">

        <Navbar />

        {/* Background vidéo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/zenthor.mp4" type="video/mp4" />
        </video>

        <div className="fixed inset-0 bg-black/70 -z-10"></div>

        {/* CONTENU */}
        <div className="pt-32 px-8 max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-16 text-center cyber-title">
            MES TALENTS
          </h1>

          <div className="grid md:grid-cols-3 gap-10">

            {clients.map((client, i) => (
              <div key={i} className="cyber-card text-center">

                {/*  PP */}
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-40 h-40 mx-auto cyber-avatar mb-4"
                />

                {/*  Nom */}
                <h2 className="text-xl font-semibold mb-2">
                  {client.name}
                </h2>

                {/* TEAM / F-A */}
                <div
                  className={`team-badge mx-auto mb-4 ${
                    client.team === "F/A"
                      ? "team-fa"
                      : "team-org"
                  }`}
                >
                  {client.team}
                </div>

                {/* Twitter */}
                <a
                  href={client.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-social mx-auto"
                >
                  <FaTwitter size={26} />
                </a>

              </div>
            ))}

          </div>

        </div>

      </div>

    </PageTransition>
  )
}