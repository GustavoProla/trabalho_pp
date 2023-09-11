import React from "react";
import { AuthProvider } from "./contexts/auth";
import RoutesApp from "./routes/rotas";



function App() {
  return (
    <AuthProvider>
    <RoutesApp/>
  </AuthProvider>
  );
}

export default App;
