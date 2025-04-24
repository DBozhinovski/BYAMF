import App from "./App";
import { hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import "vinxi/client";

hydrateRoot(
  document,
  <Router>
    <App />
  </Router>
);
