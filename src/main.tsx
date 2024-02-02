import React from "react";
import ReactDOM from "react-dom/client";

import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import LexicaFeature from "./components/LexicaFeature.tsx";
import ThemeFeature from "./components/ThemeFeature.tsx";
import { SpotlightPreview } from "./components/Spotlight.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <SpotlightPreview />
    <LexicaFeature />
    <ThemeFeature />
    <Footer />
  </React.StrictMode>
);
