import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollController from './components/ScrollController';
import AppRoutes from './routes/AppRoutes';

// --- NEW: Import the Quote Modal ---
import QuoteModal from './components/QuoteModal';

function App() {
  // --- NEW: Create a global state for the Navbar button ---
  const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false);

  return (
    <Router>
      <ScrollController />

      <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-orange-500 selection:text-white">
        {/* --- NEW: Pass the trigger function to the Navbar as a prop --- */}
        <Navbar openQuoteModal={() => setIsGlobalModalOpen(true)} />

        <main className="flex-grow">
          <AppRoutes openQuoteModal={() => setIsGlobalModalOpen(true)} />
        </main>
        
        <Footer />
      </div>

      {/* --- NEW: The Global Modal for general inquiries --- */}
      <QuoteModal
        isOpen={isGlobalModalOpen}
        onClose={() => setIsGlobalModalOpen(false)}
        machineName="General Inquiry"
      />
    </Router>
  );
}

export default App;