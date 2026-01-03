import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import RupeeDiaryPrivacy from './components/privacy/RupeeDiaryPrivacy';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


const AppContent = () => {
  const location = useLocation();
  const isPrivacyPage = location.pathname.startsWith("/privacy");


  return (
    <>
      {!isPrivacyPage && <Header />}

      <main className="flex-1">
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/education" element={<Education />} />
          <Route path="/portfolio/contact" element={<Contact />} />

          {/* Isolated Privacy Page */}
          <Route path="/privacy/rupeediary" element={<RupeeDiaryPrivacy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isPrivacyPage && <Footer />}
    </>
  );
};


const App = () => {
  return (
    <div className="App min-h-screen flex flex-col">
      <ErrorBoundary>
        <Router>
          <AppContent />
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
