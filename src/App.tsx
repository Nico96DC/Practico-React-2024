//App.tsx
import { useState } from "react"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { AppProduct } from "./components/AppProduct/AppProduct"
import { FormComponent } from "./components/FormComponent/FormComponent"

export const App = () => {
  const [enableCouter, setEnableCounter] = useState(false)

  return (
    <div style = {{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
      <MiPrimerComponent
        text = "Texto desde propiedades"
        color = "red"
        fontSize = {2}
      />
      {
        enableCouter && <ComponentCounter />
      }
      <button onClick={() => {
        setEnableCounter(!enableCouter)
        console.log("Estado de counter: ", enableCouter)
      }}
      >
        Mostrar/Ocultar counter
      </button>
      <ComponentUseEffect />
      <FormComponent />
      <AppProduct />
    </div>
  )
}
