import { Power, RefreshCw, StopCircle, Users } from "lucide-react";
import { useState } from "react";

function StatusPill({ status }) {
  const map = {
    running: {
      label: "Running",
      color: "bg-[#43B581]/20 text-[#43B581] ring-1 ring-[#43B581]/50",
    },
    stopped: {
      label: "Stopped",
      color: "bg-red-500/10 text-red-400 ring-1 ring-red-400/30",
    },
    restarting: {
      label: "Restarting",
      color: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-400/30",
    },
  };
  const cfg = map[status] || map.stopped;
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${cfg.color}`}>
      <span className="relative flex h-2 w-2 mr-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status==='running'?'bg-[#43B581]':status==='restarting'?'bg-amber-400':'bg-red-400'}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${status==='running'?'bg-[#43B581]':status==='restarting'?'bg-amber-400':'bg-red-400'}`}></span>
      </span>
      {cfg.label}
    </span>
  );
}

export default function DashboardPreview() {
  const [status, setStatus] = useState("running");
  const [players, setPlayers] = useState(42);

  const handleAction = (type) => {
    if (type === "start") {
      setStatus("running");
    } else if (type === "stop") {
      setStatus("stopped");
    } else {
      setStatus("restarting");
      setTimeout(() => setStatus("running"), 1200);
    }
  };

  return (
    <section id="dashboard" className="bg-[#23272A] py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Server Dashboard</h2>
            <p className="text-white/70 mt-1">Quick controls and live overview of your GTPS instance.</p>
          </div>
          <StatusPill status={status} />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl bg-[#2C2F33] border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">gtps-001</h3>
                <p className="text-white/60 text-sm">Region: EU-West • Uptime: {status === 'running' ? '3d 4h' : '—'}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleAction('start')} className="inline-flex items-center gap-2 bg-[#43B581] hover:bg-[#3aa36f] text-white text-sm font-medium px-3 py-2 rounded-md">
                  <Power className="h-4 w-4" /> Start
                </button>
                <button onClick={() => handleAction('restart')} className="inline-flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-sm font-medium px-3 py-2 rounded-md">
                  <RefreshCw className="h-4 w-4" /> Restart
                </button>
                <button onClick={() => handleAction('stop')} className="inline-flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 text-sm font-medium px-3 py-2 rounded-md">
                  <StopCircle className="h-4 w-4" /> Stop
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg bg-[#23272A] p-4 border border-white/10">
                <p className="text-white/60 text-xs">CPU</p>
                <p className="text-white text-2xl font-semibold">32%</p>
              </div>
              <div className="rounded-lg bg-[#23272A] p-4 border border-white/10">
                <p className="text-white/60 text-xs">Memory</p>
                <p className="text-white text-2xl font-semibold">4.3 GB</p>
              </div>
              <div className="rounded-lg bg-[#23272A] p-4 border border-white/10">
                <p className="text-white/60 text-xs">Disk</p>
                <p className="text-white text-2xl font-semibold">27%</p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-[#23272A] p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Players Online</span>
                </div>
                <div className="text-white font-semibold">{players}</div>
              </div>
              <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#7289DA]" style={{ width: `${Math.min(players, 100)}%` }} />
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#2C2F33] border border-white/10 p-6">
            <h4 className="text-white font-semibold">Recent Activity</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Container rebuilt successfully</li>
              <li>Backup created (nightly)</li>
              <li>Player peak: 87</li>
              <li>Firewall rules updated</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
