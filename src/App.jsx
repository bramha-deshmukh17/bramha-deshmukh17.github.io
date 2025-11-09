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
import './App.css';
import './index.css';
// CHANGE: BrowserRouter instead of HashRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col">
      <ErrorBoundary>
        <Router>
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
