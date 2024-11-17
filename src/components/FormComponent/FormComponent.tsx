// FormComponent.tsx
import { useForm } from "../../hooks/useForm"
import { useState } from "react";

export const FormComponent = () => {
  const { values, handleChange, resetForm } = useForm({ nombre: "", email: "", edad: 0 });
  const { nombre, email, edad } = values;
  const [errors, setErrors] = useState({ nombre: "", email: "", edad: "" });

  const validate = () => {
    let tempErrors = { nombre: "", email: "", edad: "" };
    if (!nombre || !email || !edad) tempErrors.nombre = "El campo es requerido.";
    if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email no válido.";
    }
    if (edad <= 0 || edad > 120) {
      tempErrors.edad = "La edad debe tener un número válido.";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      console.log(values);
      resetForm();
    }
  };

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh"
        }}
        onSubmit={handleSubmitForm}
      >
        <input
          value={nombre}
          name="nombre"
          onChange={handleChange}
          type="text"
          placeholder="Ingrese su nombre"
        />
        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Ingrese su correo"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <input
          value={edad}
          name="edad"
          onChange={handleChange}
          type="number"
          placeholder="Ingrese su edad"
          min="1"
        />
        {errors.edad && <p style={{ color: "red" }}>{errors.edad}</p>}
        <div>
          <button type="submit">Enviar</button>
          <button type="button" onClick={resetForm}>Reiniciar</button>
        </div>
      </form>
    </div>
  );
}
