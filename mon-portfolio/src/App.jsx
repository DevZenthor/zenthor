import { Routes, Route } from "react-router-dom"
import Intro from "./pages/Intro"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />

    </Routes>
  )
}