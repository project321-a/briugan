import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ClientPortal } from './pages/ClientPortal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<ClientPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
