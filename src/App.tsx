import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ClientPortal } from './pages/ClientPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<ClientPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
