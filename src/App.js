import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import './general.css'

import Nav from "./components/Nav/Nav";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ScrollToTop from "./components/ScrollToTop";



function App() {

  const [coverHidden, setCoverHidden] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [coverHidden]);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav coverHidden={coverHidden} />
        <AnimatedRoutes coverHidden={coverHidden} setCoverHidden={setCoverHidden} />

      </Router>

    </>
  );
}

export default App;
