import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("/mensaje") // nombre del servicio backend en docker-compose
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch((err) => setMensaje("Error al obtener el mensaje"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "serif" }}>
      <h1>Frontend en React</h1>
      <p>Mensaje del backend:</p>
      <blockquote>{mensaje}</blockquote>
    </div>
  );
}

export default App;
