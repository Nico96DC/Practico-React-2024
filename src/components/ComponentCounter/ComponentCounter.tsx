//ComponentCounter.tsx
import { useState } from "react"

export const ComponentCounter = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter((prev) => prev + 1)
  }
  const decrement = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1)
    }
  }
  const restart = () => {
    setCounter(0)
    console.log("Contador reiniciado")
  }

  return (
    <div>
      <h2>Contador: {counter}</h2>
      <button onClick={increment}>
        Aumentar
      </button>
      <button onClick={decrement}>
        Disminuir
      </button>
      <br />
      <button onClick={restart}>
        Reiniciar
      </button>
    </div>
  )
}
