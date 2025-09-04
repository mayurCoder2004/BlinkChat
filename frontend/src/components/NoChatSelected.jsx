import { MessageSquare, PlusCircle } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 relative overflow-hidden bg-gradient-to-br from-base-100/90 to-base-200/90 animate-fadeIn">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="relative max-w-md text-center space-y-8 z-10">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="relative">
            <div
              className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center 
              justify-center animate-bounce shadow-xl shadow-primary/30 backdrop-blur-sm"
            >
              <MessageSquare className="w-12 h-12 text-primary drop-shadow-lg animate-pulse-slow" />
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 animate-ping" />
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-4xl font-extrabold tracking-tight text-base-content animate-slideUp">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
            BlinkChat
          </span>{" "}
          🚀
        </h2>
        <p className="text-base-content/70 leading-relaxed text-lg animate-fadeIn delay-200">
          Select a conversation from the sidebar <br /> or start a new chat to
          connect instantly.
        </p>

        {/* CTA (Optional) */}
        <button
          className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-content shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          <PlusCircle size={20} />
          Start a New Chat
        </button>
      </div>
    </div>
  );
};

export default NoChatSelected;
