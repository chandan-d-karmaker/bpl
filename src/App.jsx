import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/players'
import { ToastContainer } from 'react-toastify'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'

const fetchPlayers = async () => {
  const res = await fetch('playerData.json')
  const players = await res.json()
  return players;
}

function App() {

  const players = fetchPlayers();
  const [coin, setCoin] = useState(9000000);

  return (
    <div>
      <Navbar coin={coin} />
      <Banner />

      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[50vh] w-full">
          <span className="loading loading-infinity loading-lg text-primary"></span>
        </div>
      }>
        <Players players={players} setCoin={setCoin} coin={coin} />
      </Suspense>

      <Form/>

      <Footer/>

      <ToastContainer />
    </div>
  )
}

export default App
