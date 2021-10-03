import Header from './Components/Header'
import DarkModeButton from './Components/DarkModeButton'

import Navigation from './Components/Navigation'
import Home from './Home'

export default function Landing() {
  return (
    <div className="container">
      <Header title = "Bakhtiar Reza | Home" description = "Home for Bakhtiar Reza Website" index = "index, follow"/>
      <Navigation/>
      <Home/>
    </div>
  )
}
