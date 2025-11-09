import { useState } from "react";
import { Save } from "lucide-react";

const defaultConfig = `# Basic GTPS Config\nserver_name=My GTPS\nmax_players=100\nport=17091\nwelcome_message=Welcome to my GTPS!`;

export default function ConfigEditor() {
  const [config, setConfig] = useState(defaultConfig);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);

  const onSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setSavedAt(new Date());
  };

  return (
    <section id="config" className="bg-[#23272A] py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Configuration</h2>
        <p className="text-white/70 mt-1">Edit common settings and apply changes instantly.</p>

        <div className="mt-6 rounded-xl bg-[#2C2F33] border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="text-white/80 text-sm">gtps-001.env</div>
            <button onClick={onSave} disabled={saving} className="inline-flex items-center gap-2 bg-[#7289DA] hover:bg-[#5f74c7] disabled:opacity-60 text-white text-sm font-medium px-4 py-2 rounded-md">
              <Save className="h-4 w-4" /> {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
          <textarea
            value={config}
            onChange={(e) => setConfig(e.target.value)}
            spellCheck={false}
            className="w-full h-64 bg-[#1f2326] text-white p-4 outline-none font-mono text-sm"
          />
          <div className="px-4 py-3 border-t border-white/10 text-xs text-white/60">
            {savedAt ? `Last saved at ${savedAt.toLocaleTimeString()}` : 'Unsaved changes'}
          </div>
        </div>
      </div>
    </section>
  );
}
