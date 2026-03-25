export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">

      <div className="cyber-navbar max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="cyber-logo">ZENTHOR</h1>

        {/* Bouton */}
        <button className="cyber-btn">
          CONTACT
        </button>

      </div>

    </nav>
  )
}