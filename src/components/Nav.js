import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

import '../styles/Nav.css'

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <FaAngleLeft className="nav-left" />
        <span>1</span>
        <FaAngleRight className="nav-right" />
      </div>
    </nav>
  )
}

export default Nav
