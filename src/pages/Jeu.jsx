import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import Sombrero from '../components/Sombrero'
import De from '../components/De'
import CarteConsigne from '../components/CarteConsigne'
import Timer from '../components/Timer'
import Scoreboard from '../components/Scoreboard'
import LanguageToggle from '../components/LanguageToggle'
import { cartes, plateau } from '../data/cartes'
import './Jeu.css'

function Jeu() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [position, setPosition] = useState(0)
  const [score, setScore] = useState(0)
  const [consigneActuelle, setConsigneActuelle] = useState(null)
  const [timerActif, setTimerActif] = useState(false)
  const [timerReset, setTimerReset] = useState(false)
  const [consigneTerminee, setConsigneTerminee] = useState(false)
  const [deDesactive, setDeDesactive] = useState(false)
  const [jeuTermine, setJeuTermine] = useState(false)

  // Charger la consigne initiale
  useEffect(() => {
    chargerConsigne(0)
  }, [])

  const chargerConsigne = (pos) => {
    const caseActuelle = plateau[pos]
    
    if (caseActuelle.type === 'start' || caseActuelle.type === 'finish') {
      setConsigneActuelle(null)
      if (caseActuelle.type === 'finish') {
        setJeuTermine(true)
      }
      return
    }

    let nouvelleConsigne = null
    const cartesType = {
      'theme': cartes.themes,
      'emotion': cartes.emotions,
      'motFou': cartes.motsFous,
      'situation': cartes.situations
    }

    const listeCartes = cartesType[caseActuelle.type]
    if (listeCartes) {
      const indexAleatoire = Math.floor(Math.random() * listeCartes.length)
      nouvelleConsigne = listeCartes[indexAleatoire]
    }

    setConsigneActuelle(nouvelleConsigne)
  }

  const handleLancerDe = (resultat) => {
    if (jeuTermine) return

    const nouvellePosition = Math.min(position + resultat, plateau.length - 1)
    setPosition(nouvellePosition)
    chargerConsigne(nouvellePosition)
    setConsigneTerminee(false)
    setDeDesactive(true)
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
    setDeDesactive(false)
    setTimerActif(false)
  }

  const handleAjouterBonus = () => {
    setScore(score + 1)
  }

  const handleRecommencer = () => {
    setPosition(0)
    setScore(0)
    setConsigneActuelle(null)
    setTimerActif(false)
    setConsigneTerminee(false)
    setDeDesactive(false)
    setJeuTermine(false)
    chargerConsigne(0)
  }

  const caseActuelle = plateau[position]

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
        {/* Sombrero au centre */}
        <div className="section-sombrero">
          <Sombrero />
        </div>

        {/* Zone centrale - Dé + Carte */}
        <div className="section-centrale">
          <div className="zone-de">
            <De onLancer={handleLancerDe} disabled={deDesactive || jeuTermine} />
          </div>

          <div className="zone-carte">
            {!jeuTermine && consigneActuelle && (
              <CarteConsigne
                type={caseActuelle.type}
                consigne={consigneActuelle}
                onDemarrer={handleDemarrerTimer}
                dejaJoue={consigneTerminee}
              />
            )}

            {!jeuTermine && caseActuelle.type === 'start' && (
              <CarteConsigne type="start" />
            )}

            {jeuTermine && (
              <div className="fin-jeu">
                <div className="fin-contenu">
                  <h2 className="fin-titre">🎉 {t.congratulations}</h2>
                  <p className="fin-message">{t.youFinished}</p>
                  <div className="fin-score">
                    <span className="fin-score-label">{t.finalScore}</span>
                    <span className="fin-score-valeur">{score} ⭐</span>
                  </div>
                  <div className="fin-boutons">
                    <button className="btn-rejouer" onClick={handleRecommencer}>
                      🔄 {t.playAgain}
                    </button>
                    <Link to="/" className="btn-menu-fin">
                      🏠 {t.mainMenu}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
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
              onAjouterBonus={consigneTerminee && !jeuTermine ? handleAjouterBonus : null}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jeu
