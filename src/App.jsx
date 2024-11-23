import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GamePage from './pages/GamePage';
import InfoPage from './pages/InfoPage';
import GameOverPage from './pages/GameOverPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/gameOver" element={<GameOverPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
