import Navbar from "../components/Navbar"
import { FaTwitter, FaDiscord } from "react-icons/fa"

export default function Home() {
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

      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      {/* CARD */}
      <div className="flex items-center justify-center min-h-screen px-6">

        <div className="cyber-card max-w-3xl w-full text-center">

          <img
            src="/pp.jpg"
            alt="Zenthor"
            className="w-40 h-40 mx-auto cyber-avatar"
          />

          <h1 className="cyber-title mt-8">ZENTHOR</h1>

          <p className="cyber-text mt-6">
            Directeur Marketing de One Prodige, manager de talents et webdesigner.
          </p>

          <div className="flex justify-center gap-8 mt-10">

            <a href="#" className="cyber-social">
              <FaTwitter size={28} />
            </a>

            <a href="#" className="cyber-social">
              <FaDiscord size={28} />
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}