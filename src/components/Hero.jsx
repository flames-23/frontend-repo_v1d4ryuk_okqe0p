import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] bg-[#23272A]" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#23272A] via-[#23272A]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-start gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Host Your Growtopia Private Server in Seconds
          </h1>
          <p className="mt-4 text-lg text-white/80">
            One-click deployments, powerful controls, and real-time insights. Built for speed, reliability, and the gaming community.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#dashboard" className="inline-flex items-center justify-center rounded-md bg-[#7289DA] hover:bg-[#5f74c7] text-white font-medium px-5 py-3 shadow-lg shadow-[#7289DA]/30">Launch Dashboard</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-[#43B581] hover:bg-[#3aa36f] text-white font-medium px-5 py-3 shadow-lg shadow-[#43B581]/30">See Features</a>
          </div>
        </div>
      </div>
    </section>
  );
}
