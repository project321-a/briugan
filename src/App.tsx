import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ClientPortal } from './pages/ClientPortal';
import { FeedPage } from './pages/FeedPage';
import { DealsPage } from './pages/DealsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portal" element={<ClientPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
