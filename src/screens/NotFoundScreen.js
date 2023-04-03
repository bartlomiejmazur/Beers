import iconNetwork from '../assets/network-no-route-svgrepo-com.svg'

import {NavLink} from 'react-router-dom'
import '../styles/NotFoundScreen.css'

export default function NotFoundScreen() {
  return (
    <div className="notfound-container">
      <div className="notfound-title">Not found route</div>
      <img src={iconNetwork} alt="not found route" className="notdound-img" />
      <NavLink to={'/'} className="notfound-link">
        Go back
      </NavLink>
    </div>
  )
}
