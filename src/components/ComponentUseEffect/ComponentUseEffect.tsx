//ComponentUseEffect.tsx
import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
  const [state, setState] = useState(false)
  useEffect(() => {
    console.log("Componente habilitado")
    return () => {
      console.log("Componente deshabilitado")
    }
  }, [])
  useEffect(() => {
    console.log("Estado del useEffect definido en ", state)
  }, [state])

  return (
    <div>
      <p>Estado del componente useEffect: {state ? "H" : "Desh"}abilitado</p>
      <button onClick={() => {
        setState(!state)
      }}>
        Cambiar
      </button>
    </div>
  )
}
