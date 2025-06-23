import { useState, useEffect } from "react"
import { Theme } from "@chakra-ui/react"
import Game from './Pages/Game.jsx'
import HowToPlay from "./Pages/HowToPlay.jsx"
import Main from "./Pages/Main.jsx"
import Settings from "./Pages/Settings.jsx"
import { Center } from "@chakra-ui/react"

import { cards, dice } from './utils/dic.js'
import { settings } from './utils/defaultSettings.js'

function App() {
  const [page, setPage] = useState('home')
  const [gameConfig, setGameConfig] = useState({})

  useEffect(() => {
    console.log('Reading default config')
    const defaultconfig = {
      cards,
      dice,
      settings
    }
    setGameConfig(defaultconfig)
  }, [])

  return (
    <div style={{ padding: "1rem" }}>
      <Theme appearance="dark">
        <Center>
          {
            page === 'game' && (
              <Game config={gameConfig} setPage={setPage} />
            )
          }
          {
            page === 'howto' && (
              <HowToPlay setPage={setPage} />
            )
          }
          {
            page === 'home' && (
              <Main setPage={setPage} />
            )
          }
          {
            page === 'settings' && (
              <Settings setGameConfig={setGameConfig} config={gameConfig} setPage={setPage} />
            )
          }
        </Center>
      </Theme>
    </div>
  )
}

export default App