import { useEffect, useState } from "react"

export default function PageTransition({ children }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 1500) // durée vidéo

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* VIDEO TRANSITION */}
      {show && (
        <video
          autoPlay
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[9999]"
        >
          <source src="/transition.mp4" type="video/mp4" />
        </video>
      )}

      {/* PAGE */}
      {!show && children}
    </>
  )
}