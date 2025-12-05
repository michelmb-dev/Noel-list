import { useState, useEffect } from 'preact/hooks'

interface Snowflake {
  id: number
  left: number
  top: number
  duration: number
  fontSize: number
}

function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    let id = 0

    const createSnowflake = (): void => {
      const newSnowflake: Snowflake = {
        id: id++,
        left: Math.random() * 100,
        top: Math.random() * 10,
        duration: Math.random() * 3 + 5,
        fontSize: Math.random() * 10 + 10,
      }

      setSnowflakes((prev) => [...prev, newSnowflake])

      // Retirer le flocon après 5 secondes
      setTimeout(() => {
        setSnowflakes((prev) => prev.filter((sf) => sf.id !== newSnowflake.id))
      }, 5000)
    }

    // Créer quelques flocons au démarrage
    for (let i = 0; i < 10; i++) {
      setTimeout(createSnowflake, i)
    }

    // Générer des flocons régulièrement
    const interval = setInterval(createSnowflake, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {snowflakes.map((sf: Snowflake) => (
        <span
          key={sf.id}
          className="snowflake"
          style={{
            left: `${sf.left}%`,
            top: `${sf.top}%`,
            animationDuration: `${sf.duration}s`,
            fontSize: `${sf.fontSize}px`,
          }}
        >
          ❄
        </span>
      ))}
    </>
  )
}

export default Snowflakes
