import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import ConfigEditor from './components/ConfigEditor';

function App() {
  return (
    <div className="min-h-screen bg-[#23272A] text-white font-inter">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <ConfigEditor />
      <footer className="bg-[#23272A] border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} GTPS Cloud. All rights reserved.</p>
          <div className="text-white/60 text-sm">Built with love for the Growtopia community.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
