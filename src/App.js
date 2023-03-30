import Header from './components/Header'
import {AppRoutes} from './screens/routes/AppRoutes'
import {BrowserRouter as Router} from 'react-router-dom'

import '../src/styles/App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
