import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-3 border-b bg-base-100/70 border-gradient-to-r from-primary/40 via-base-300 to-transparent">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div
              className={`size-11 rounded-full relative border shadow-md transition-all ${
                isOnline ? "ring-2 ring-primary/70" : ""
              }`}
            >
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
              />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="font-semibold text-base-content">
              {selectedUser.fullName}
            </h3>
            <div className="flex items-center gap-1.5 text-sm text-base-content/70">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isOnline ? "bg-green-500 animate-pulse" : "bg-gray-400"
                }`}
              />
              <p>{isOnline ? "Online" : "Offline"}</p>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-full hover:bg-base-200 transition-colors shadow-sm"
        >
          <X className="w-5 h-5 text-base-content/70 hover:text-error" />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
