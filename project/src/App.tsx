import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { IndiaUpdates } from './pages/IndiaUpdates';
import { Opportunities } from './pages/Opportunities';
import { Consulting } from './pages/Consulting';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/updates" element={<IndiaUpdates />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
