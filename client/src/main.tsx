import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  document.title = "BIC Kuwait - ICT Solutions & AI Innovation";
  
  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content = "BIC Kuwait specializes in innovative ICT solutions including AI voice bots, AI chat bots, AI agents and other hardware and software solutions. Strategic partner of potential.com for Kuwait.";
  document.head.appendChild(meta);
  
  createRoot(root).render(<App />);
}
