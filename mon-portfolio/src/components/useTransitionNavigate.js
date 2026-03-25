import { useNavigate } from "react-router-dom"

export default function useTransitionNavigate() {
  const navigate = useNavigate()

  const go = (path) => {
    const video = document.getElementById("page-transition")

    if (video) {
      video.classList.remove("hidden")
      video.currentTime = 0
      video.play()
    }

    setTimeout(() => {
      navigate(path)

      if (video) video.classList.add("hidden")
    }, 1200) 
  }

  return go
}