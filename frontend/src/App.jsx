import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard'
import Loginpage from './components/Loginpage'
import Navbar from './components/Navbar'
import Registerpage from './components/Registerpage'
// import PrivateRoute from './utils/PrivateRoute'

import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>

        {/* <Routes>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />
        </Routes> */}
      </AuthProvider>
    </Router>
  )
}

export default App