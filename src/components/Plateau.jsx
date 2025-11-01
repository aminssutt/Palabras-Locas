import { plateau } from '../data/cartes'
import './Plateau.css'

function Plateau({ positionJoueur }) {
  return (
    <div className="plateau-container">
      <div className="plateau-piste">
        {plateau.map((case_) => (
          <div
            key={case_.id}
            className={`case case-${case_.type} ${
              positionJoueur === case_.id ? 'active' : ''
            }`}
          >
            <span className="case-label">{case_.label}</span>
            {positionJoueur === case_.id && (
              <span className="pion">👤</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plateau
