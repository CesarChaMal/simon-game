import { useEffect, useState } from 'react'
import './App.css'

const COLORS = [
  { id: 'green', name: 'Verde' },
  { id: 'red', name: 'Rojo' },
  { id: 'yellow', name: 'Amarillo' },
  { id: 'blue', name: 'Azul' },
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
    ready: 'Pulsa comenzar cuando estés listo',
    playing: 'Observa la secuencia…',
    input: '¡Tu turno! Repite la secuencia',
    lost: 'Secuencia incorrecta. ¡Inténtalo de nuevo!',
  }[status]

  return (
    <main className="game-shell">
      <header className="game-header">
        <div className="brand-icon" aria-hidden="true">S</div>
        <div>
          <p className="eyebrow">JUEGO DE MEMORIA</p>
          <h1>Simón</h1>
        </div>
      </header>

      <section className="game-card" aria-label="Juego Simón">
        <div className="score-row">
          <div className="score">
            <span className="score-label">NIVEL</span>
            <strong>{sequence.length}</strong>
          </div>
          <p className={`game-status game-status--${status}`} aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            {statusText}
          </p>
          <div className="score score--progress">
            <span className="score-label">PROGRESO</span>
            <strong>{status === 'input' ? `${userSequence.length}/${sequence.length}` : '—'}</strong>
          </div>
        </div>

        <div className="board" aria-label="Panel de colores">
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
            <span>SIMÓN</span>
            <small>{sequence.length ? `RONDA ${sequence.length}` : 'MEMORIA'}</small>
          </div>
        </div>

        <button className="start-button" type="button" onClick={startGame}>
          <span aria-hidden="true">{status === 'ready' ? '▶' : '↻'}</span>
          {status === 'ready' ? 'Comenzar' : 'Reiniciar partida'}
        </button>
        <p className="instruction">Mira, memoriza y repite el orden de los colores.</p>
      </section>

      <footer className="game-footer">
        <div className="footer-message">
          <span className="footer-line" />
          <p>¿Hasta qué nivel puedes llegar?</p>
          <span className="footer-line" />
        </div>
        <a
          className="creator-link"
          href="https://github.com/cesarchamal"
          target="_blank"
          rel="noreferrer"
        >
          Hecho por cesarchamal
        </a>
      </footer>
    </main>
  )
}

export default App
