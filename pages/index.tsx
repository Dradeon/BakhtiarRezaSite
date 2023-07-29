import Header from '../Components/Header/Header'
import React from 'react'

import Home from './Home'

export default function Landing() {
  return (
    <div className="container">
      <React.StrictMode>
        <Home/>
      </React.StrictMode>
    </div>
  )
}
