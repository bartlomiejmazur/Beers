import {FaSquare} from 'react-icons/fa'
import '../styles/Main.css'

const Main = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="beer-card">
          <div className="beer-card__container">
            <img alt="" className="beer-card__img" />
            <h4 className="beer-card__title">Title</h4>
            <div className="beer-card__line">
              <div className="beer-card__line-left-line"></div>
              <FaSquare className="beer-card__line-icon" />
              <div className="beer-card__line-right-line"></div>
            </div>
            <p className="beer-card__content">
              lorem ipsum dolor lorem ipsum dolor
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
