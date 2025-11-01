import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import './Timer.css'

function Timer({ duree = 30, onFin, actif, onReset }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [tempsRestant, setTempsRestant] = useState(duree)
  const [enCours, setEnCours] = useState(false)

  useEffect(() => {
    if (actif && !enCours) {
      setEnCours(true)
      setTempsRestant(duree)
    }
  }, [actif, duree])

  useEffect(() => {
    if (onReset) {
      setEnCours(false)
      setTempsRestant(duree)
    }
  }, [onReset, duree])

  useEffect(() => {
    if (!enCours || tempsRestant <= 0) return

    const interval = setInterval(() => {
      setTempsRestant((prev) => {
        if (prev <= 1) {
          setEnCours(false)
          if (onFin) onFin()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [enCours, tempsRestant, onFin])

  const pourcentage = (tempsRestant / duree) * 100
  const estCritique = tempsRestant <= 5

  return (
    <div className={`timer-container ${enCours ? 'active' : ''} ${estCritique ? 'critique' : ''}`}>
      <div className="timer-circle">
        <svg className="timer-svg" viewBox="0 0 100 100">
          <circle
            className="timer-background"
            cx="50"
            cy="50"
            r="45"
          />
          <circle
            className="timer-progress"
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDasharray: `${2 * Math.PI * 45}`,
              strokeDashoffset: `${2 * Math.PI * 45 * (1 - pourcentage / 100)}`,
            }}
          />
        </svg>
        <div className="timer-text">
          <span className="timer-seconds">{tempsRestant}</span>
          <span className="timer-label">{t.sec}</span>
        </div>
      </div>
      {enCours && (
        <p className="timer-message">
          {estCritique ? `⚠️ ${t.timeAlmostUp}` : `⏱️ ${t.speakSpanish}`}
        </p>
      )}
    </div>
  )
}

export default Timer
