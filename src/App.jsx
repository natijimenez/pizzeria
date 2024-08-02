import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import { useState } from 'react';
import Navigation from './components/Navigation'

function App() {

  const [token, setToken] = useState(false);

  return (
    <>
      <Navigation token={token} />
      <a className='switchToken' onClick={() => setToken(!token)}>
        {token ? 'Log Out' : 'Log In'}
      </a>
      <Home />
      <Footer />
    </>
  )
}

export default App
