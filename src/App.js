import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Account from './containers/Account/Account'
import Home from './containers/Home/Home'
import Error from './containers/Error/Error'

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
