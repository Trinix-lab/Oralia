import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { ChatAssistant } from './components/ChatAssistant/ChatAssistant';
import { Home } from './pages/Home';
import { Catalogue } from './pages/Catalogue';
import { Journey } from './pages/Journey';
import { Product } from './pages/Product';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-luxury-deepBlack">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;
