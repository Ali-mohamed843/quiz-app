import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <Router>
        <main className="w-full h-screen min-h-screen text-neutral-600 flex flex-col bg-[#120038] text-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#20004d] via-[#1a0037] to-[#0b001d] opacity-80 z-0" />
          <Home />
        </main>
      </Router>
    </>
  )
}

export default App

