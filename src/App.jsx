import { useEffect, useState } from 'react'
import './App.css'

const COLORS = [
  { id: 'green', name: 'Green' },
  { id: 'red', name: 'Red' },
  { id: 'yellow', name: 'Yellow' },
  { id: 'blue', name: 'Blue' },
]

const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)].id

function App() {
  const [sequence, setSequence] = useState([])
  const [userSequence, setUserSequence] = useState([])
  const [activeColor, setActiveColor] = useState(null)
  const [status, setStatus] = useState('ready')

  useEffect(() => {
    if (status !== 'playing') return undefined

    const timers = []
    sequence.forEach((color, index) => {
      timers.push(
        window.setTimeout(() => {
          setActiveColor(color)
          timers.push(
            window.setTimeout(() => {
              setActiveColor(null)
              if (index === sequence.length - 1) setStatus('input')
            }, 520),
          )
        }, 350 + index * 850),
      )
    })

    return () => timers.forEach(window.clearTimeout)
  }, [sequence, status])

  const startGame = () => {
    setSequence([randomColor()])
    setUserSequence([])
    setActiveColor(null)
    setStatus('playing')
  }

  const handlePadClick = (color) => {
    if (status !== 'input') return

    const nextUserSequence = [...userSequence, color]
    setUserSequence(nextUserSequence)

    if (sequence[nextUserSequence.length - 1] !== color) {
      setStatus('lost')
      return
    }

    if (nextUserSequence.length === sequence.length) {
      setUserSequence([])
      setSequence((currentSequence) => [...currentSequence, randomColor()])
      setStatus('playing')
    }
  }

  const statusText = {
    ready: "Press start when you're ready.",
    playing: 'Watch the sequence…',
    input: 'Your turn! Repeat the sequence.',
    lost: 'Incorrect sequence. Try again!',
  }[status]

  return (
    <main className="game-shell">
      <header className="game-header">
        <div className="brand-icon" aria-hidden="true">S</div>
        <div>
          <p className="eyebrow">MEMORY GAME</p>
          <h1>Simon</h1>
        </div>
      </header>

      <section className="game-card" aria-label="Simon game">
        <div className="score-row">
          <div className="score">
            <span className="score-label">LEVEL</span>
            <strong>{sequence.length}</strong>
          </div>
          <p className={`game-status game-status--${status}`} aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            {statusText}
          </p>
          <div className="score score--progress">
            <span className="score-label">PROGRESS</span>
            <strong>{status === 'input' ? `${userSequence.length}/${sequence.length}` : '—'}</strong>
          </div>
        </div>

        <div className="board" aria-label="Color pads">
          {COLORS.map(({ id, name }) => (
            <button
              key={id}
              type="button"
              className={`pad pad--${id}${activeColor === id ? ' is-active' : ''}`}
              aria-label={name}
              aria-pressed={activeColor === id}
              disabled={status !== 'input'}
              onClick={() => handlePadClick(id)}
            />
          ))}
          <div className="board-center" aria-hidden="true">
            <span>SIMON</span>
            <small>{sequence.length ? `ROUND ${sequence.length}` : 'MEMORY'}</small>
          </div>
        </div>

        <button className="start-button" type="button" onClick={startGame}>
          <span aria-hidden="true">{status === 'ready' ? '▶' : '↻'}</span>
          {status === 'ready' ? 'Start game' : 'Restart game'}
        </button>
        <p className="instruction">Watch, remember, and repeat the colors in order.</p>
      </section>

      <footer className="game-footer">
        <div className="footer-message">
          <span className="footer-line" />
          <p>How high can you score?</p>
          <span className="footer-line" />
        </div>
        <a
          className="creator-link"
          href="https://github.com/cesarchamal"
          target="_blank"
          rel="noreferrer"
        >
          Made by cesarchamal
        </a>
      </footer>
    </main>
  )
}

export default App
