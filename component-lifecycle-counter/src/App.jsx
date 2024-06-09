import { useState } from 'react'
import './App.css'
import GameOver from './components/GameOver'
import Counter from './components/Counter'

function App() {
  const [isGameOver, setIsGameOver] = useState(false)

  const finishGame = () => {
    setIsGameOver(true)
  }

  return (
      <div style={styles.container}>
        {isGameOver ?
          <GameOver /> : <Counter finishGame={finishGame} />
        }
      </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '30px',
  },
}

export default App
