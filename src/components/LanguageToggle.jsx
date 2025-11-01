import { useLanguage } from '../contexts/LanguageContext'
import './LanguageToggle.css'

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button className="language-toggle" onClick={toggleLanguage} aria-label="Changer de langue">
      <span className={`flag ${language === 'fr' ? 'active' : ''}`}>🇫🇷</span>
      <span className="separator">/</span>
      <span className={`flag ${language === 'es' ? 'active' : ''}`}>🇪🇸</span>
    </button>
  )
}

export default LanguageToggle
