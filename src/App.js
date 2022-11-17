import logo from "./logo.svg";
import "./App.css";
import Pricing from "./Pricing";
import Animation from "./Animation";
import Data from "./tutor/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Routing/Navbar";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Projects from "./Routing/Projects";
import One from "./tutor/One";
import Two from "./tutor/Two";

function App() {
  return (
    <div className="App">
      {/* <Pricing /> */}
      <Animation />
      {/* <Data /> */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter> */}
      {/* <One /> */}
      <Two />
    </div>
  );
}

export default App;
