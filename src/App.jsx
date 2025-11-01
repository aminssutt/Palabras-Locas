import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Regles from './pages/Regles'
import Jeu from './pages/Jeu'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regles" element={<Regles />} />
        <Route path="/jeu" element={<Jeu />} />
      </Routes>
    </div>
  )
}

export default App
