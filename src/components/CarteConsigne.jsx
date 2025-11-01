import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import './CarteConsigne.css'

function CarteConsigne({ type, consigne, onDemarrer, dejaJoue }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  const getTypeInfo = () => {
    switch (type) {
      case 'theme':
        return { icon: '🟢', titre: t.themeCase, couleur: 'green' }
      case 'emotion':
        return { icon: '🔵', titre: t.emotionCase, couleur: 'blue' }
      case 'motFou':
        return { icon: '🔴', titre: t.crazyWordCase, couleur: 'red' }
      case 'situation':
        return { icon: '🟣', titre: t.situationCase, couleur: 'purple' }
      case 'start':
        return { icon: '🎯', titre: t.start, couleur: 'yellow' }
      case 'finish':
        return { icon: '🏆', titre: t.finish, couleur: 'gold' }
      default:
        return { icon: '❓', titre: 'Case', couleur: 'gray' }
    }
  }

  const typeInfo = getTypeInfo()

  return (
    <div className={`carte-consigne carte-${typeInfo.couleur}`}>
      <div className="carte-header">
        <span className="carte-icon">{typeInfo.icon}</span>
        <h3 className="carte-titre">{typeInfo.titre}</h3>
      </div>

      {consigne && (
        <div className="carte-body">
          <p className="carte-consigne-text">{consigne}</p>
        </div>
      )}

      {type === 'start' && (
        <div className="carte-body">
          <p className="carte-info">{t.welcomeStart} 🎲</p>
        </div>
      )}

      {type === 'finish' && (
        <div className="carte-body">
          <p className="carte-info">{t.congratsFinish} 🎉</p>
        </div>
      )}

      {consigne && !dejaJoue && (
        <button className="btn-demarrer" onClick={onDemarrer}>
          ⏱️ {t.startTimer}
        </button>
      )}

      {dejaJoue && (
        <div className="carte-termine">
          ✅ {t.instructionCompleted}
        </div>
      )}
    </div>
  )
}

export default CarteConsigne
