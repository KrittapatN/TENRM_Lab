import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import ProjectDetail from './pages/ProjectDetail';
import Team from './pages/Team';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Adapt from './features/adapt/Adapt';
import Games from './features/games/Games';
import RouteEffects from './components/RouteEffects';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <RouteEffects />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:id" element={<ProjectDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adapt/*" element={<Adapt />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:slug" element={<Games />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
