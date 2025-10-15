import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { X } from "lucide-react";
import { Menu } from "lucide-react";
import Typed from "typed.js";

function App() {
  return (
    <>
      <div className="bg-gradient-page">
        <Navbar />
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
        <section id="footer"><Footer /></section>
      </div>
    </>
  );
}

export default App;
