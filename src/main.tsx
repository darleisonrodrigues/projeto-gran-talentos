import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializar AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
});

createRoot(document.getElementById("root")!).render(<App />);
