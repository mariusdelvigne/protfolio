import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';

export default function AppRouter({ mode, onToggleMode }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout mode={mode} onToggleMode={onToggleMode} />}>
          <Route index element={<Home />} />
          <Route path="projets" element={<Projects />} />
          <Route path="projets/:id" element={<ProjectDetail />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
