import React from "react";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";
import "./index.css";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components/Index";

import "./App.scss";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

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
