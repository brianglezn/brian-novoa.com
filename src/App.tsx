import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import './i18n';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
const Linktree = lazy(() => import('./pages/Linktree'));

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/:userId" element={<Linktree />} />
    </Routes>
  );
} 