import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import './De.css'

function De({ onLancer, disabled }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [resultat, setResultat] = useState(null)
  const [enCours, setEnCours] = useState(false)

  const lancerDe = () => {
    if (disabled || enCours) return

    setEnCours(true)
    
    // Animation du dé
    let compteur = 0
    const interval = setInterval(() => {
      setResultat(Math.floor(Math.random() * 6) + 1)
      compteur++
      
      if (compteur > 10) {
        clearInterval(interval)
        const resultatFinal = Math.floor(Math.random() * 6) + 1
        setResultat(resultatFinal)
        setEnCours(false)
        onLancer(resultatFinal)
      }
    }, 100)
  }

  return (
    <div className="de-container">
      <div className={`de ${enCours ? 'rolling' : ''} ${disabled ? 'disabled' : ''}`}>
        {resultat && <span className="de-number">{resultat}</span>}
        {!resultat && <span className="de-icon">🎲</span>}
      </div>
      <button 
        className="btn-lancer" 
        onClick={lancerDe} 
        disabled={disabled || enCours}
      >
        {enCours ? t.rolling : `🎲 ${t.rollDice}`}
      </button>
    </div>
  )
}

export default De
