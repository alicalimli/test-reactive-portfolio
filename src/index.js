import React from "react";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import { StrictMode } from "react/cjs/react.production.min";
import App from "./App";
import "./index.css";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components/Index";

import "./";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="app">
    <StrictMode>
      <Navbar></Navbar>
      <App />
      <About />
      <Header />
      <Footer />
      <Skills />
      <Testimonial />
      <Work />
    </StrictMode>
  </div>
);
