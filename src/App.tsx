import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
