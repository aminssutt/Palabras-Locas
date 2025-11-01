import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import './Scoreboard.css'

function Scoreboard({ score, onAjouterBonus }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div className="scoreboard-container">
      <div className="score-display">
        <span className="score-label">{t.score}</span>
        <span className="score-value">{score}</span>
        <span className="score-icon">⭐</span>
      </div>

      {onAjouterBonus && (
        <button className="btn-bonus" onClick={onAjouterBonus}>
          {t.bonusPoint} 💎
        </button>
      )}

      <div className="score-info">
        <div className="info-item">
          <span className="info-badge">+2</span>
          <span className="info-text">{t.speak30sec}</span>
        </div>
        <div className="info-item">
          <span className="info-badge bonus">+1</span>
          <span className="info-text">{t.originalVocab}</span>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
