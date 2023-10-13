import { Button } from "@mui/material";
import React, { useState } from "react";
import { Series } from "./components/clients/Series";

const App = () => {
  const [saludo, setSaludo] = useState("");
  const handleSetSaludo = () => {
    setSaludo("Hola desde React App");
  };
  return (
    <>
      <Button onClick={handleSetSaludo}>
        Ver saludo
      </Button>
      <h3>{saludo}</h3>
      <Series />
    </>
  );
};

export default App;
