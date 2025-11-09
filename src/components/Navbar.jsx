import { Rocket, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-secondary/60 bg-[#2C2F33]/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#7289DA] flex items-center justify-center shadow-lg shadow-[#7289DA]/40">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold leading-5">GTPS Cloud</p>
            <p className="text-xs text-white/60 -mt-1">Fast. Simple. Powerful.</p>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <a href="#features" className="text-white/80 hover:text-white text-sm px-3 py-2 rounded-md">Features</a>
          <a href="#dashboard" className="text-white/80 hover:text-white text-sm px-3 py-2 rounded-md">Dashboard</a>
          <a href="#config" className="text-white/80 hover:text-white text-sm px-3 py-2 rounded-md">Config</a>
          <button className="ml-2 inline-flex items-center gap-2 bg-[#7289DA] hover:bg-[#5f74c7] text-white text-sm font-medium px-4 py-2 rounded-md shadow-lg shadow-[#7289DA]/30">
            <Settings className="h-4 w-4" />
            Panel Login
          </button>
        </nav>
      </div>
    </header>
  );
}
