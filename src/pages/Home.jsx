import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import LanguageToggle from '../components/LanguageToggle'
import './Home.css'

function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="home-container">
      <div className="language-toggle-container">
        <LanguageToggle />
      </div>
      
      <div className="home-content">
        <div className="title-section">
          <h1 className="main-title">🎲 {t.mainTitle}</h1>
          <h2 className="subtitle-spanish">{t.subtitle}</h2>
          <p className="tagline">{t.tagline}</p>
        </div>

        <div className="buttons-section">
          <Link to="/jeu" className="btn btn-play">
            🎲 {t.startPlaying}
          </Link>
          <Link to="/regles" className="btn btn-rules">
            📘 {t.gameRules}
          </Link>
        </div>

        <div className="info-cards">
          <div className="info-card">
            <span className="icon">🟢</span>
            <h3>{t.themes}</h3>
            <p>{t.themesDesc}</p>
          </div>
          <div className="info-card">
            <span className="icon">🔵</span>
            <h3>{t.emotions}</h3>
            <p>{t.emotionsDesc}</p>
          </div>
          <div className="info-card">
            <span className="icon">🔴</span>
            <h3>{t.crazyWords}</h3>
            <p>{t.crazyWordsDesc}</p>
          </div>
          <div className="info-card">
            <span className="icon">🟣</span>
            <h3>{t.situations}</h3>
            <p>{t.situationsDesc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
