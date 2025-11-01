import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import LanguageToggle from '../components/LanguageToggle'
import './Regles.css'

function Regles() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="regles-container">
      <div className="regles-language-toggle">
        <LanguageToggle />
      </div>
      
      <div className="regles-content">
        <h1 className="regles-title">📘 {t.rulesTitle}</h1>
        <h2 className="regles-subtitle">{t.rulesSubtitle}</h2>

        <div className="regles-sections">
          {/* Objectif */}
          <section className="regle-section">
            <h3>🎯 {t.objective}</h3>
            <p>{t.objectiveText}</p>
          </section>

          {/* Matériel */}
          <section className="regle-section">
            <h3>🎲 {t.material}</h3>
            <ul>
              {t.materialList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Déroulement */}
          <section className="regle-section">
            <h3>🎮 {t.gameplay}</h3>
            <ol>
              {t.gameplayList.map((item, index) => (
                <li key={index}><strong>{item.split(' ')[0]} {item.split(' ')[1]}</strong> {item.split(' ').slice(2).join(' ')}</li>
              ))}
            </ol>
          </section>

          {/* Types de cases */}
          <section className="regle-section">
            <h3>🎨 {t.caseTypes}</h3>
            <div className="cases-types">
              <div className="case-type green">
                <span className="case-icon">🟢</span>
                <h4>{t.themeCase}</h4>
                <p>{t.themeCaseDesc}</p>
              </div>
              <div className="case-type blue">
                <span className="case-icon">🔵</span>
                <h4>{t.emotionCase}</h4>
                <p>{t.emotionCaseDesc}</p>
              </div>
              <div className="case-type red">
                <span className="case-icon">🔴</span>
                <h4>{t.crazyWordCase}</h4>
                <p>{t.crazyWordCaseDesc}</p>
              </div>
              <div className="case-type purple">
                <span className="case-icon">🟣</span>
                <h4>{t.situationCase}</h4>
                <p>{t.situationCaseDesc}</p>
              </div>
            </div>
          </section>

          {/* Système de points */}
          <section className="regle-section">
            <h3>⭐ {t.pointsSystem}</h3>
            <div className="points-system">
              <div className="point-item">
                <span className="points-badge">{t.points2}</span>
                <p>{t.points2Desc}</p>
              </div>
              <div className="point-item">
                <span className="points-badge bonus">{t.points1}</span>
                <p>{t.points1Desc}</p>
              </div>
            </div>
          </section>

          {/* Conseils */}
          <section className="regle-section">
            <h3>💡 {t.tips}</h3>
            <ul>
              {t.tipsList.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </section>

          {/* Fin du jeu */}
          <section className="regle-section">
            <h3>🏆 {t.endGame}</h3>
            <p>{t.endGameText}</p>
          </section>
        </div>

        <div className="back-button-container">
          <Link to="/" className="btn-back">
            ⬅ {t.backToMenu}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Regles
