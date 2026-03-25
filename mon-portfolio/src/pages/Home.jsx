import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="text-white min-h-screen relative pt-20 md:pt-28 px-4 md:px-8">

      <Navbar />

      <video autoPlay muted loop playsInline className="fixed w-full h-full object-cover -z-10">
        <source src="/zenthor.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="cyber-card max-w-3xl w-full text-center">

          <img src="/pp.jpg" className="w-28 h-28 md:w-40 md:h-40 mx-auto cyber-avatar" />

          <h1 className="cyber-title mt-8">ZENTHOR</h1>

          <p className="cyber-text mt-6">
            Directeur Marketing, manager de talents et webdesigner.
          </p>

        </div>
      </div>

    </div>
  )
}