import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  document.title = "PMC Pakistan - Digital Solutions & AI Innovation";
  
  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content = "PMC Pakistan specializes in innovative digital solutions including AI voice bots, AI chat bots, AI agents and other technology solutions. Part of the pmc.me family serving Pakistan.";
  document.head.appendChild(meta);
  
  createRoot(root).render(<App />);
}
