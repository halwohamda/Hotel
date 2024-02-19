import React from 'react' 
import Dashboard from './components/Dashboard'
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <>
  <Dashboard/>
    <Outlet/>
    
    </>
  )
}

export default App