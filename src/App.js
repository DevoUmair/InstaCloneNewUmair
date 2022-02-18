import React , {useState} from 'react'
import Home from './components/Home/Home'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Login from './components/Login/login'
import {UserAuthContextProvider} from './components/Context/UserAuthContext'
import ProtectRouter from './components/ProtectRouter'
import Profile from './components/Profile/Profile'

function App() {
  const [isLogged , setLogged ] = useState(localStorage.getItem("auth"))

  return (
    <Router>
      <UserAuthContextProvider>
          <Routes>
            <Route path='/Home' element={<ProtectRouter> <Home isLogged={isLogged} /> </ProtectRouter>} />
            <Route path='/' element={<Login setLogged={setLogged} isLogged={isLogged} />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
      </UserAuthContextProvider>
    </Router>
  )
}

export default App