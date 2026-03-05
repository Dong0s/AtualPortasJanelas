import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Restaurar rota depois do redirect do 404.html
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(<App />);
