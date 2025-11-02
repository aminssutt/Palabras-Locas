import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import './CartesTournantes.css'

function CartesTournantes({ onCarteChoisie }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [carteRetournee, setCarteRetournee] = useState(null)
  const [enMelange, setEnMelange] = useState(true)
  const [positions, setPositions] = useState([0, 1, 2, 3])

  // 4 cartes, une pour chaque type
  const cartes = [
    { id: 1, type: 'theme', couleur: '#4ade80', icon: '🟢', label: 'themeCase' },
    { id: 2, type: 'emotion', couleur: '#60a5fa', icon: '🔵', label: 'emotionCase' },
    { id: 3, type: 'motFou', couleur: '#f87171', icon: '🔴', label: 'crazyWordCase' },
    { id: 4, type: 'situation', couleur: '#a78bfa', icon: '🟣', label: 'situationCase' }
  ]

  // Mélanger les positions au démarrage
  useEffect(() => {
    if (enMelange) {
      const intervalId = setInterval(() => {
        setPositions(prev => {
          const newPos = [...prev]
          // Échanger aléatoirement deux positions
          const i = Math.floor(Math.random() * 4)
          const j = Math.floor(Math.random() * 4)
          ;[newPos[i], newPos[j]] = [newPos[j], newPos[i]]
          return newPos
        })
      }, 300)

      // Arrêter après 3 secondes
      const timeoutId = setTimeout(() => {
        setEnMelange(false)
        clearInterval(intervalId)
      }, 3000)

      return () => {
        clearInterval(intervalId)
        clearTimeout(timeoutId)
      }
    }
  }, [enMelange])

  const handleCarteClick = (carte) => {
    if (enMelange || carteRetournee) return

    setCarteRetournee(carte.id)

    // Après l'animation de flip, notifier le parent
    setTimeout(() => {
      onCarteChoisie(carte.type)
    }, 800)
  }

  const reinitialiser = () => {
    setCarteRetournee(null)
    setEnMelange(true)
    setPositions([0, 1, 2, 3])
  }

  const getTypeLabel = (labelKey) => {
    return t[labelKey]
  }

  return (
    <div className="cartes-container">
      <h2 className="cartes-titre">
        {enMelange && '🔄 ' + (language === 'fr' ? 'Mélange des cartes...' : 'Mezclando cartas...')}
        {!enMelange && !carteRetournee && '👆 ' + (language === 'fr' ? 'Choisis une carte' : 'Elige una carta')}
        {carteRetournee && '🎉 ' + (language === 'fr' ? 'Carte révélée !' : '¡Carta revelada!')}
      </h2>
      
      <div className={`cartes-grille ${enMelange ? 'melange' : ''}`}>
        {cartes.map((carte, index) => {
          const positionIndex = positions[index]
          const isFlipped = carteRetournee === carte.id
          const isOther = carteRetournee && carteRetournee !== carte.id

          return (
            <div
              key={carte.id}
              className={`carte-wrapper ${isFlipped ? 'flipped' : ''} ${isOther ? 'faded' : ''} ${enMelange ? 'shuffling' : ''}`}
              style={{
                order: positionIndex,
                pointerEvents: enMelange ? 'none' : 'auto'
              }}
              onClick={() => handleCarteClick(carte)}
            >
              <div className="carte">
                <div className="carte-face carte-dos">
                  <div className="carte-motif">✦</div>
                  <div className="carte-pattern">
                    <div className="pattern-line"></div>
                    <div className="pattern-line"></div>
                    <div className="pattern-line"></div>
                  </div>
                </div>
                <div 
                  className="carte-face carte-avant"
                  style={{ backgroundColor: carte.couleur }}
                >
                  <span className="carte-icon-grand">{carte.icon}</span>
                  <span className="carte-type">{getTypeLabel(carte.label)}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {carteRetournee && (
        <button className="btn-nouvelle-carte" onClick={reinitialiser}>
          🔄 {language === 'fr' ? 'Mélanger à nouveau' : 'Mezclar de nuevo'}
        </button>
      )}
    </div>
  )
}

export default CartesTournantes
