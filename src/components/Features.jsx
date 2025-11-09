import { Server, Gauge, Settings, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "One-Click GTPS",
    desc: "Spin up a Growtopia Private Server with a single tap. We handle the infrastructure, you handle the fun.",
  },
  {
    icon: Gauge,
    title: "Live Metrics",
    desc: "Track uptime, CPU/RAM, and player counts in real time with clear status indicators.",
  },
  {
    icon: Settings,
    title: "Power Controls",
    desc: "Start, stop, restart, and reinstall with safe actions and instant feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    desc: "Isolated containers, DDoS-ready edge, and automatic backups for peace of mind.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#23272A] py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Why GTPS Cloud</h2>
        <p className="text-white/70 mt-2 max-w-2xl">A modern, gaming-inspired panel that feels familiar but built specifically for the Growtopia community.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-[#2C2F33] border border-white/10 p-6 shadow-lg shadow-black/20 hover:shadow-[#7289DA]/10 transition-shadow">
              <div className="h-10 w-10 rounded-md bg-[#7289DA] text-white flex items-center justify-center shadow-md shadow-[#7289DA]/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
