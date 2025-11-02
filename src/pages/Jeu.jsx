import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import CartesTournantes from '../components/CartesTournantes'
import CarteConsigne from '../components/CarteConsigne'
import Timer from '../components/Timer'
import Scoreboard from '../components/Scoreboard'
import LanguageToggle from '../components/LanguageToggle'
import { cartes, plateau } from '../data/cartes'
import './Jeu.css'

function Jeu() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [score, setScore] = useState(0)
  const [consigneActuelle, setConsigneActuelle] = useState(null)
  const [typeActuel, setTypeActuel] = useState(null)
  const [timerActif, setTimerActif] = useState(false)
  const [timerReset, setTimerReset] = useState(false)
  const [consigneTerminee, setConsigneTerminee] = useState(false)

  const chargerConsigne = (type) => {
    setTypeActuel(type)
    
    let nouvelleConsigne = null
    const cartesType = {
      'theme': cartes.themes,
      'emotion': cartes.emotions,
      'motFou': cartes.motsFous,
      'situation': cartes.situations
    }

    const listeCartes = cartesType[type]
    if (listeCartes) {
      const indexAleatoire = Math.floor(Math.random() * listeCartes.length)
      nouvelleConsigne = listeCartes[indexAleatoire]
    }

    setConsigneActuelle(nouvelleConsigne)
    setConsigneTerminee(false)
  }

  const handleCarteChoisie = (type) => {
    chargerConsigne(type)
    setTimerActif(false)
    setTimerReset(prev => !prev)
  }

  const handleDemarrerTimer = () => {
    setTimerActif(true)
    setTimerReset(false)
  }

  const handleFinTimer = () => {
    setScore(score + 2)
    setConsigneTerminee(true)
    setTimerActif(false)
  }

  const handleAjouterBonus = () => {
    setScore(score + 1)
  }

  return (
    <div className="jeu-container">
      <div className="jeu-header">
        <Link to="/" className="btn-retour">⬅ {t.menu}</Link>
        <h1 className="jeu-title">🎲 {t.mainTitle}</h1>
        <div className="jeu-header-right">
          <LanguageToggle />
          <Link to="/regles" className="btn-aide">❓ {t.help}</Link>
        </div>
      </div>

      <div className="jeu-content">
        {/* Cartes tournantes au centre */}
        <div className="section-cartes">
          <CartesTournantes onCarteChoisie={handleCarteChoisie} />
        </div>

        {/* Zone de consigne */}
        <div className="section-consigne">
          {consigneActuelle && typeActuel && (
            <CarteConsigne
              type={typeActuel}
              consigne={consigneActuelle}
              onDemarrer={handleDemarrerTimer}
              dejaJoue={consigneTerminee}
            />
          )}

          {!consigneActuelle && (
            <div className="message-attente">
              <h3>👆 {language === 'fr' ? 'Choisis une carte pour commencer' : 'Elige una carta para empezar'}</h3>
            </div>
          )}
        </div>

        {/* Zone droite - Timer + Score */}
        <div className="section-droite">
          <div className="zone-timer">
            <Timer
              duree={30}
              onFin={handleFinTimer}
              actif={timerActif}
              onReset={timerReset}
            />
          </div>

          <div className="zone-score">
            <Scoreboard
              score={score}
              onAjouterBonus={consigneTerminee ? handleAjouterBonus : null}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jeu
