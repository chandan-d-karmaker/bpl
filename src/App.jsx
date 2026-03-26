import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/players'

const fetchPlayers = async () => {
  const res = await fetch('playerData.json')
  const players = await res.json()
  return players;
}

function App() {

  const players = fetchPlayers();

  return (
    <div>
        <Navbar/>
        <Banner/>

        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <Players players={players}/>
        </Suspense>
    </div>
  )
}

export default App
