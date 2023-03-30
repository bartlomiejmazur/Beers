import {Routes, Route} from 'react-router-dom'

import BeerScreen from '../BeerScreen'
import MainScreen from '../MainScreen'
import NotFoundScreen from '../NotFoundScreen'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/details/:beerId" element={<BeerScreen />} />
      <Route path="/" element={<MainScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}
