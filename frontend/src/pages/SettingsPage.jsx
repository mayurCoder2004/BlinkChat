import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const navigate = useNavigate();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-10">
        {/* Header with Back */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-base-300 
                       bg-base-100 shadow-sm hover:bg-base-200 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        </div>

        {/* Theme Selector */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {THEMES.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`
                group flex flex-col items-center gap-2 p-4 rounded-xl border 
                transition-all duration-300 shadow-sm
                ${theme === t 
                  ? "bg-base-200 border-primary ring-2 ring-primary/50 shadow-md" 
                  : "border-base-300 hover:bg-base-200/70 hover:shadow"}
              `}
            >
              <div
                className="relative h-12 w-full rounded-md overflow-hidden shadow-md"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span
                className={`text-xs font-medium truncate w-full ${
                  theme === t ? "text-primary" : "text-base-content/70"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Preview</h3>
          <div className="rounded-2xl border border-base-300 overflow-hidden bg-base-100 shadow-xl">
            <div className="p-6 bg-base-200">
              <div className="max-w-lg mx-auto">
                {/* Mock Chat UI */}
                <div className="bg-base-100 rounded-xl shadow-md overflow-hidden border border-base-300">
                  {/* Chat Header */}
                  <div className="px-4 py-3 border-b border-base-300 bg-base-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-content font-semibold shadow">
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">John Doe</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 min-h-[220px] max-h-[220px] overflow-y-auto bg-base-100">
                    {PREVIEW_MESSAGES.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`
                            max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm transition
                            ${message.isSent 
                              ? "bg-primary text-primary-content rounded-br-none" 
                              : "bg-base-200 text-base-content rounded-bl-none"}
                          `}
                        >
                          <p className="text-sm leading-snug">{message.content}</p>
                          <p
                            className={`text-[10px] mt-1.5 ${
                              message.isSent ? "text-primary-content/70" : "text-base-content/50"
                            }`}
                          >
                            12:00 PM
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-3 border-t border-base-300 bg-base-100">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1 text-sm h-10 rounded-lg focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="Type a message..."
                        value="This is a preview"
                        readOnly
                      />
                      <button className="btn btn-primary h-10 min-h-0 px-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
