import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import Academic from './pages/Academic';
import Dissemination from './pages/Dissemination';
import Engagement from './pages/Engagement';
import Collaborators from './pages/Collaborators';
import Team from './pages/Team';
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
          <Route path="/academic" element={<Academic />} />
          <Route path="/dissemination" element={<Dissemination />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adapt/*" element={<Adapt />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:slug" element={<Games />} />
          {/* Older addresses now covered by Dissemination */}
          <Route path="/publications" element={<Navigate to="/dissemination" replace />} />
          <Route path="/research/*" element={<Navigate to="/dissemination" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
